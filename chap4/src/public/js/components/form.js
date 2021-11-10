import BaseComponent from "./BaseComponent.js";

export default class Form extends BaseComponent{
    constructor(props) {
        super(props);
    }

    render() {
        let $form = document.createElement('form')
        $form.onsubmit = (e)=>{
            this.props.onSubmit(e)
        };

        let $input = document.createElement('input')
        $input.placeholder = 'Nhập comment';
        $input.className = 'form-control';
        $input.value =this.props.value;
        $input.onchange = (e)=>{
            this.props.onChange(e.target.value);
        };

        let $btnCmt = document.createElement('button')
        $btnCmt.innerHTML = 'Gửi';
        $btnCmt.className = 'btn btn-primary mt-1';

        $form.append($input,$btnCmt);

        return $form;
    }
}