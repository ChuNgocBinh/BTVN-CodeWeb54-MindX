import BaseComponent from "./BaseComponent.js";

export default class InputWraper extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let $container = document.createElement('div')
        $container.className = 'form-group mb-3';

        let $title = document.createElement('h5');
        $title.className = 'form-title';
        $title.innerHTML = this.props.title;

        let $inputBox = document.createElement('input');
        $inputBox.className = 'form-control';
        $inputBox.value = this.props.value;
        $inputBox.name = this.props.name;
        $inputBox.type = this.props.type;
        $inputBox.placeholder = this.props.placeholder;
        $inputBox.onchange = (e) => {
            this.props.onChange(e.target.name, e.target.value);
        }

        let $errorMessageBox = document.createElement('div');
        $errorMessageBox.className = 'text-danger';
        $errorMessageBox.innerHTML = this.props.errorMessage;

        $container.append($title, $inputBox, $errorMessageBox)

        return $container

    }
}