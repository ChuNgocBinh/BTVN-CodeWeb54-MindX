import BaseComponent from "../components/Basecomponent.js";
import InputWraper from "../components/inputWraper.js";
import ListTodo from "../components/listTodo.js";
import { appendTo } from "../utils.js";

export default class IndexScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            content: ['Learn ReactJs'],
        }
    }

    handleChange(value) {
        let tmpState = this.state;
        tmpState.value = value;
        this.setState(tmpState);
    }

    handleSubmit(e) {
        e.preventDefault();
        let tmpState = this.state;
        if (tmpState.value != '') {
            tmpState.content.push(tmpState.value)
        }
        tmpState.value = ''
        this.setState(tmpState);
    }

    handleDelete(index) {
        let tmpState = this.state;
        tmpState.content.splice(index, 1);
        this.setState(tmpState);
    }

    handleClick($inputCheck, $lableContent) {

        if ($inputCheck.checked) {
            $lableContent.style.textDecoration = 'line-through';
            // $title.innerHTML = couter == 0 ? 'All tasks are done' : `There is ${couter} task to complete`
        } else {
            $lableContent.style.textDecoration = 'none';
            // $title.innerHTML = `There is ${couter} task to complete`
        }
    }

    render() {
        let $container = document.createElement("div");
        $container.className = 'container mt-5';

        appendTo($container, new InputWraper({
            value: this.state.value,
            onchange: (e) => {
                this.handleChange(e.target.value);
            },
            onSubmit: (e) => {
                this.handleSubmit(e);
            }
        }))
        let $title = document.createElement('h4');
        $title.innerHTML = this.state.content.length == 0 ? 'All tasks are done' : `There is ${this.state.content.length} task to complete`;
        $container.append($title);

        this.state.content.map((item, index) => {
            appendTo($container, new ListTodo({
                lableContent: item,
                onDelete: () => {
                    this.handleDelete(index);
                },
                onclick: ($inputCheck, $lableContent) => {
                    this.handleClick($inputCheck, $lableContent, $title);
                }
            }))
        })
        return $container
    }

}