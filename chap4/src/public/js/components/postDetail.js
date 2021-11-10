import BaseComponent from "./BaseComponent.js";

export default class PostDetail extends BaseComponent{
    constructor(props) {
        super(props);
    }

    render() {
        
        let $content = document.createElement('div');
        $content.className = 'w-50'

        let $picture = document.createElement('div')
        $picture.className = 'mb-3';

        let $imgUrl = document.createElement('img');
        $imgUrl.src = this.props.imgURL;
        $imgUrl.className = 'w-100';

        $picture.append($imgUrl)

        let $title = document.createElement('h4');
        $title.innerHTML = this.props.title;

        let $description = document.createElement('p');
        $description.innerHTML = this.props.description;

        let $likeCount = document.createElement('p');
        $likeCount.innerHTML = 'Lượt thích: ' + this.props.likeCount;

        let $createBy = document.createElement('p');
        $createBy.innerHTML = 'Người tạo: ' + this.props.createBy;

        let $timeCreated = document.createElement('small');
        $timeCreated.innerHTML = 'Ngày tạo: ' + this.props.createdAt;


        $content.append($picture, $title, $description, $likeCount, $createBy,$timeCreated)

        return $content;

    }
}