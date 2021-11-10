import BaseComponent from './BaseComponent.js'

export default class Posts extends BaseComponent {
    constructor(props) {
        super(props)
    }

    render() {

        let $container = document.createElement('div');

        let listPosts = this.props.posts.map((post) => {

            let $imgUrl = document.createElement('img');
            $imgUrl.className = 'me-3'
            $imgUrl.style.width = '250px'
            $imgUrl.src = post.imgUrl;

            let $content = document.createElement('div');


            let $title = document.createElement('h4');
            $title.innerHTML = post.title;

            let $description = document.createElement('p');
            $description.innerHTML = post.description;

            let $likeCount = document.createElement('p');
            $likeCount.innerHTML = 'Lượt thích: ' + post.likeCount;

            let $author = document.createElement('p');
            $author.innerHTML = 'Người viết: ' + post.createBy;

            let $btn = document.createElement('button');
            $btn.innerHTML = 'Xem';
            $btn.className = 'btn btn-primary'
            $btn.onclick = () => {
                this.props.onClick(post._id);
            }
            $content.append($title, $description, $likeCount, $author, $btn)

            let $postGroup = document.createElement('div')
            $postGroup.className = 'container d-flex align-items-center  border-bottom '
            $postGroup.append($imgUrl, $content)
            return $postGroup
        })

        $container.append(...listPosts);

        return $container;

    }
}