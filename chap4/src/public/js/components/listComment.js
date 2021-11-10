import BaseComponent from "./BaseComponent.js";

export default class ListComment extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let $container = document.createElement("div");
        let listComment = this.props.comments.map((comment) => {
            let $createBy = document.createElement('h5')
            $createBy.innerHTML = comment.createBy;
            $createBy.className = 'pb-0 mb-1'

            let $content = document.createElement('p');
            $content.innerHTML = comment.content;
            $content.className = 'pb-0 mb-0'

            let $timeCreated = document.createElement('small');
            $timeCreated.innerHTML = comment.createdAt

            let $comment = document.createElement('div');
            $comment.className = 'mb-3'

            $comment.append($createBy, $content, $timeCreated);

            return $comment;
        })

        $container.append(...listComment);
        return $container;
    }
}