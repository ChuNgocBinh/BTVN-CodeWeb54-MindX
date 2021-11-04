import IndexScreen from "./screen/indexScreen.js";
import { appendTo } from "./utils.js";

let $app = document.getElementById('app');
appendTo($app, new IndexScreen())