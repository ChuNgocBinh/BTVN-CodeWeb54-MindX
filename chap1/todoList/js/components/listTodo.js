import BaseComponent from "./Basecomponent.js";

export default class ListTodo extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let $container = document.createElement("div");
        $container.className = 'd-flex justify-content-between align-items-center p-1 mb-1 border border-success rounded'

        let $inputCheck = document.createElement("input");
        $inputCheck.type = "checkbox";
        $inputCheck.className = 'form-check-input'
        $inputCheck.style.width = '1rem';
        $inputCheck.style.height = '1rem';
        $inputCheck.style.cursor = 'pointer';
        $inputCheck.onclick = ()=>{
            this.props.onclick($inputCheck,$lableContent)
        };

        let $lableContent = document.createElement("label");
        $lableContent.className = 'ms-2';
        $lableContent.innerHTML = this.props.lableContent;

        let $formGroup = document.createElement("div");
        $formGroup.append($inputCheck, $lableContent)

        let $btnDelete = document.createElement("button");
        $btnDelete.className = "btn btn-danger";
        $btnDelete.innerHTML = "Delete";
        $btnDelete.onclick = this.props.onDelete;

        $container.append($formGroup, $btnDelete)
        return $container
    }
}