import BaseComponent from "../components/BaseComponent.js";
import Form from "../components/form.js";
import ListComment from "../components/listComment.js";
import Navbar from "../components/navbar.js";
import PostDetail from "../components/postDetail.js";
import Posts from "../components/posts.js";
import { getCommentsBypost, getPost } from "../models/getData.js";
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
        tmpState.post = await getPost(postId)
        tmpState.comments = await getCommentsBypost(postId);
        this.setState(tmpState);
    }

    handleSubmit(e) {
        e.preventDefault();
        let tmpState = this.state;
        if (tmpState.valueComment.trim() !=''){
            let newComment = {
                author: 'binh be',
                content: tmpState.valueComment
            }
            tmpState.comments.push(newComment)
            this.state.valueComment = ''
            this.setState(tmpState);
        }
    }

    handleChange(value) {
        let tmpState = this.state;
        this.state.valueComment = value;
        this.setState(tmpState);
    }

    render() {
        let $container = document.createElement('div');
        let _navBar = new Navbar()

        appendTo($container, _navBar);


        let _postDetail = new PostDetail({
            imgURL: this.state.post.imgURL,
            title: this.state.post.title,
            description: this.state.post.description,
            likeCount: this.state.post.likeCount,
            createBy: this.state.post.createBy,
            createdAt: this.state.post.createdAt,
        })


        let $interact = document.createElement('div');
        $interact.className = 'w-50 ps-5'

        appendTo($interact,
            new ListComment({
                comments: this.state.comments,
            }),
            new Form({
                value: this.state.valueComment,
                onSubmit: (e) => {
                    this.handleSubmit(e)
                },
                onChange: (value) => {
                    this.handleChange(value);

                }
            }),
        )

        let $post = document.createElement('div')
        $post.className = 'd-flex container mt-3';
        appendTo($post, _postDetail)
        $post.append($interact);


        $container.append($post);
        return $container
    }
}