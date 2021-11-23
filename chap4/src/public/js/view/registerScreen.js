import BaseComponent from "../components/BaseComponent.js";
import InputWraper from "../components/inputWrapper.js";
import Navbar from "../components/navbar.js";
import { validateEmail } from "../controller/validate.js";
import { appendTo } from "../utils.js";

export default class RegisterScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                email: '',
                password: '',
                cfpassword: '',
            },
            error: {
                name: '',
                email: '',
                password: '',
                cfpassword: '',
            }
        }
    }

    handleChange(name,value) {
        let tmpState = this.state;
        tmpState.data[name] = value;
        this.setState(tmpState);
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        let tmpState = this.state;
        let data = tmpState.data;
        let error = tmpState.error;
        let isValid = true;

        if (data.name.trim() ==''){
            isValid = false;
            error.name = 'invalid User Name'
        }

        if(!validateEmail(data.email)){
            isValid = false;
            error.email = 'invalid Email'
        }


        

        this.setState(tmpState);



    }

    render() {
        let $container = document.createElement('div');

        appendTo($container, new Navbar())

        let $title = document.createElement('h3');
        $title.innerHTML = 'Create an account';
        $title.className = 'text-center mt-4'

        $container.append($title);

        let _name = new InputWraper({
            title: 'User Name',
            value: this.state.data.name,
            name: 'name',
            type: 'text',
            placeholder: 'Enter UserName',
            onChange: (name,value) => {
                this.handleChange(name,value)
            },
            errorMessage: this.state.error.name,
        })

        let _email = new InputWraper({
            title: 'Email',
            value: this.state.data.email,
            name: 'email',
            type: 'text',
            placeholder: 'Enter email',
            onChange: (name,value) => {
                this.handleChange(name,value)
            },
            errorMessage: this.state.error.email,
        })

        let _password = new InputWraper({
            title: 'Password',
            value: this.state.data.password,
            name: 'password',
            type: 'password',
            placeholder: 'Enter password',
            onChange: (name,value) => {
                this.handleChange(name,value)
            },
            errorMessage: this.state.error.password,
        })

        let _cfPassword = new InputWraper({
            title: 'Confirm Password',
            value: this.state.data.cfpassword,
            name: 'cfpassword',
            type: 'password',
            placeholder: 'Enter confirm password',
            onChange: (name,value) => {
                this.handleChange(name,value)
            },
            errorMessage: this.state.error.cfpassword,
        })

        let $btn = document.createElement('button')
        $btn.innerHTML = 'Register'
        $btn.className = 'btn btn-primary w-100'

        let $form = document.createElement('form')
        $form.className = 'container w-50'
        $form.onsubmit = (e)=>{
            this.handleSubmit(e)
        }

        appendTo($form, _name, _email, _password, _cfPassword)
        $form.append($btn)

        $container.append($form)

        return $container;
    }
}