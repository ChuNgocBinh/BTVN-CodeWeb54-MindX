import BaseComponent from '../components/BaseComponent.js'
import Navbar from '../components/navbar.js';
import Post from '../components/post.js';


export default class GetPost extends BaseComponent {
    constructor(props) {
        super(props);
    }

    handleClick(id){
        localStorage.setItem('postId',JSON.stringify(id))
        router.navigate('/detail');
    }

    async render() {
        let $container = document.createElement('div');
        $container.append(new Navbar().render())
        await fetch('http://localhost:9000/api/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.posts.map(post => {
                    $container.append(new Post({
                        imgUrl: post.imgUrl,
                        title: post.title,
                        description: post.description,
                        likeCount: post.likeCount,
                        author: post.author,
                        onClick: () => {
                            this.handleClick(post._id)
                        }
                    }).render()
                    )
                })
            })
        return $container
    }
}