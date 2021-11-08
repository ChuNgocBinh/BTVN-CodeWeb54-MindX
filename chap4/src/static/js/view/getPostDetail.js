import BaseComponent from "../components/BaseComponent.js";
import Navbar from "../components/navbar.js";
import Post from "../components/post.js";

export default class GetPostDetail extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async render() {
        await fetch('http://localhost:9000/api/posts')
            .then(response => response.json())
            .then(data => {
                this.state.data = data
            })

        await fetch('http://localhost:9000/api/comments')
            .then(response => response.json())
            .then(data => {
                this.state.comments = data
            })

        console.log(this.state);

        let postIdJSON = localStorage.getItem('postId');
        let postId = JSON.parse(postIdJSON)
        let postDetail = this.state.data.posts.find(post => postId == post._id);
        let commentsDetail = this.state.comments.comments.filter(comment => comment.postId == postId);
            console.log(commentsDetail);

        let $container = document.createElement('div');

        $container.append(new Navbar().render())


        let $content = document.createElement('div');

        let $imgUrl = document.createElement('img');
        $imgUrl.src = postDetail.imgUrl;


        let $title = document.createElement('h4');
        $title.innerHTML = postDetail.title;

        let $description = document.createElement('p');
        $description.innerHTML = postDetail.description;

        let $likeCount = document.createElement('p');
        $likeCount.innerHTML = 'Like: ' + postDetail.likeCount;

        let $author = document.createElement('p');
        $author.innerHTML = 'Author: ' + postDetail.author;

        $content.append($imgUrl,$title, $description, $likeCount, $author)

        let listComment = commentsDetail.map(comment => {
            let $comment = document.createElement('div');
            $comment.className = 'mb-2'

            let $author = document.createElement('h5');
            $author.innerHTML = comment.author;
            let $content = document.createElement('p');
            $content.innerHTML = comment.content;

            $comment.append($author, $content);
            return $comment;
        })

        let $form = document.createElement('form')

        let $input = document.createElement('input')
        $input.placeholder = 'Nhập comment';
        $input.className = 'form-control';

        let $btnCmt = document.createElement('button')
        $btnCmt.innerHTML = 'Gửi';
        $btnCmt.className = 'btn btn-primary';

        $form.append($input,$btnCmt);

        let $interact = document.createElement('div');
        $interact.className = 'ms-5'
        $interact.append(...listComment, $form)

        let $post = document.createElement('div')
        $post.className = 'd-flex '
        $post.append( $content,$interact );


        $container.append( $post );
        return $container
    }
}