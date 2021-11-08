import BaseComponent from './BaseComponent.js'

export default class Post extends BaseComponent {
    constructor(props) {
        super(props)
    }

    render() {
        let $container = document.createElement('div');
        $container.className = 'container d-flex align-items-center  border-bottom '

        let $imgUrl = document.createElement('img');
        $imgUrl.className = 'me-3'
        $imgUrl.style.width = '250px'
        $imgUrl.src = this.props.imgUrl;

        let $content = document.createElement('div');
        // $content.className = 'flex-shrink-3'


        let $title = document.createElement('h4');
        $title.innerHTML = this.props.title;

        let $description = document.createElement('p');
        $description.innerHTML = this.props.description;

        let $likeCount = document.createElement('p');
        $likeCount.innerHTML = 'Like: ' + this.props.likeCount;

        let $author = document.createElement('p');
        $author.innerHTML = 'Author: ' + this.props.author;

        let $btn = document.createElement('button');
        $btn.innerHTML = 'Xem';
        $btn.className = 'btn btn-primary'
        $btn.onclick = () => {
            this.props.onClick();
        }
        $content.append($title, $description, $likeCount, $author, $btn)

        $container.append($imgUrl, $content);

        return $container;

    }
}