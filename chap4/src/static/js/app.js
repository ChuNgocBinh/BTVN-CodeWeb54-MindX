import GetPost from './view/getPost.js'
import './router.js'
import GetPostDetail from './view/getPostDetail.js';

async function show(){
    let $app = document.querySelector('#app');
     $app.append(await new GetPost().render());
    //  $app.append(await new GetPostDetail().render());
}


show()
