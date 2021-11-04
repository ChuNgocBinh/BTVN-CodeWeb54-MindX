import BaseComponent from "./Basecomponent.js";

export default class InputWraper extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let $form = document.createElement("form");
        $form.className = 'd-flex mb-2';
        $form.onsubmit = this.props.onSubmit;

        let $inputElement = document.createElement("input");
        $inputElement.className = 'form-control';
        $inputElement.value = this.props.value;
        $inputElement.onchange = this.props.onchange;

        let $btnAdd = document.createElement("button");
        $btnAdd.type= 'submit';
        $btnAdd.innerHTML = 'Add'
        $btnAdd.className = 'btn btn-primary';

        $form.append($inputElement, $btnAdd);

        return $form;
    }
}