import GetPost from "./view/getPost.js";
import GetPostDetail from "./view/getPostDetail.js";

var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
let $app = document.querySelector('#app');

router
    .on('/detail', async function() {
        $app.innerHTML = '';
        $app.append(await new GetPostDetail().render());
    })
    .resolve();

router
    .on('/home', async function() {
        $app.innerHTML = '';
        $app.append(await new GetPost().render());
    })
    .resolve();

window.router = router;
