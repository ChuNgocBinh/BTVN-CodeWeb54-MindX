import GetPost from './view/getPost.js'
import './router.js'
import GetPostDetail from './view/getPostDetail.js';
import { appendTo } from './utils.js';
import RegisterScreen from './view/registerScreen.js';

 async function show(){
    let $app = document.querySelector('#app');
    //  appendTo($app, await new GetPost());
     appendTo($app, await new RegisterScreen());
    //  appendTo($app, new GetPostDetail());
}


show()
