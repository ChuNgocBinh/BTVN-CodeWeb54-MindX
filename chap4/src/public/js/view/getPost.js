import BaseComponent from '../components/BaseComponent.js'
import Navbar from '../components/navbar.js';
import Posts from '../components/posts.js';
import { getAllposts, getCommentsBypost } from '../models/getData.js';
import { appendTo } from '../utils.js';


export default class GetPost extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    handleClick(id){
        localStorage.setItem('postId',JSON.stringify(id))
        router.navigate('/detail');
    }
    async componentDidMount() {
        let tmpState = this.state;
        let posts = await getAllposts();
        tmpState.posts = posts;
        this.setState(tmpState);
    }

    render() {
        let $container = document.createElement('div');

        let _navBar = new Navbar();
        
        let _post = new Posts({
            posts: this.state.posts,
            onClick:(id)=>{
                this.handleClick(id)
            }
        });

        appendTo($container,_navBar, _post);
        return $container
    }
}