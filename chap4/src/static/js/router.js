import { appendTo } from "./utils.js";
import GetPost from "./view/getPost.js";
import GetPostDetail from "./view/getPostDetail.js";

var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
let $app = document.querySelector('#app');

router
    .on('/detail', function() {
        $app.innerHTML = '';
       appendTo( $app,  new GetPostDetail());
    })
    .resolve();

router
    .on('/home',  function() {
        $app.innerHTML = '';
        appendTo($app,  new GetPost());
    })
    .resolve();

window.router = router;
