import BaseComponent from '../components/BaseComponent.js'
import Navbar from '../components/navbar.js';
import Post from '../components/post.js';
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
        await fetch('http://localhost:9000/api/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                tmpState.posts = data.posts;
                console.log(tmpState);
            })
        this.setState(tmpState);
    }

    render() {
        let $container = document.createElement('div');

        let _navBar = new Navbar();
        
        let _post = new Post({
            posts: this.state.posts,
            onClick:(id)=>{
                this.handleClick(id)
            }
        });

        appendTo($container,_navBar, _post);
        return $container
    }
}