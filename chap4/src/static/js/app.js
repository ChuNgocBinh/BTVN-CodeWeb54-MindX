import GetPost from './view/getPost.js'
import './router.js'
import GetPostDetail from './view/getPostDetail.js';
import { appendTo } from './utils.js';

 async function show(){
    let $app = document.querySelector('#app');
     appendTo($app, await new GetPost());
    //  appendTo($app, new GetPostDetail());
}


show()
