import BaseComponent from "../components/BaseComponent.js";
import Form from "../components/form.js";
import Navbar from "../components/navbar.js";
import Post from "../components/post.js";
import { appendTo } from "../utils.js";

export default class GetPostDetail extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            valueComment: '',
        };
    }

    async componentDidMount() {
        let tmpState = this.state;
        let postIdJSON = localStorage.getItem('postId');
        let postId = JSON.parse(postIdJSON)
        await fetch('http://localhost:9000/api/posts')
            .then(response => response.json())
            .then(data => {
                let postDetail = data.posts.find(post => postId == post._id);
                tmpState.post = postDetail
            })

        await fetch('http://localhost:9000/api/comments')
            .then(response => response.json())
            .then(data => {
                let commentsDetail = data.comments.filter(comment => comment.postId == postId);
                tmpState.comments = commentsDetail;
            })
        this.setState(tmpState);
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        let tmpState = this.state;
        let newComment = {
            author: 'binh be',
            content: tmpState.valueComment
        }
        tmpState.comments.push(newComment)
        this.state.valueComment = ''
        this.setState(tmpState);
        console.log(tmpState);
    }

    handleChange(value) {
        let tmpState = this.state;
        this.state.valueComment = value;
        this.setState(tmpState);
    }

    render() {

        let $container = document.createElement('div');

        $container.append(new Navbar().render())

        let $content = document.createElement('div');

        let $imgUrl = document.createElement('img');
        $imgUrl.src = this.state.post.imgUrl;


        let $title = document.createElement('h4');
        $title.innerHTML = this.state.post.title;

        let $description = document.createElement('p');
        $description.innerHTML = this.state.post.description;

        let $likeCount = document.createElement('p');
        $likeCount.innerHTML = 'Like: ' + this.state.post.likeCount;

        let $author = document.createElement('p');
        $author.innerHTML = 'Author: ' + this.state.post.author;

        $content.append($imgUrl, $title, $description, $likeCount, $author)

        let listComment = this.state.comments.map(comment => {
            let $comment = document.createElement('div');
            $comment.className = 'mb-2'

            let $author = document.createElement('h5');
            $author.innerHTML = comment.author;
            let $content = document.createElement('p');
            $content.innerHTML = comment.content;

            $comment.append($author, $content);
            return $comment;
        })

        let $interact = document.createElement('div');
        $interact.className = 'ms-5'
        $interact.append(...listComment)
        appendTo($interact, new Form({
            value: this.state.valueComment,
            onSubmit: (e) => {
               this.handleSubmit(e)
            },
            onChange: (value) => {
                this.handleChange(value);

            }
        }))

        let $post = document.createElement('div')
        $post.className = 'd-flex '
        $post.append($content, $interact);


        $container.append($post);
        return $container
    }
}