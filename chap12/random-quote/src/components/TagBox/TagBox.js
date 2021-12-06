import React, { Component } from 'react';
import './TagBox.css'

const tags = ['business', 'education', 'faith', 'famous-quote', 'friendship', 'future', 'happiness', 'history', 'inspirational', 'life', 'literature', 'love', 'nature', 'politics', 'proverb', 'religion', 'science', 'success', 'technology', 'wisdom']

export default class TagBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTag: [],
            // tagAction: '',
        }
    }

    handleClickTag = (tag) => {
        const { activeTag } = this.state
        activeTag.includes(tag) ? activeTag.splice(activeTag.indexOf(tag), 1) : activeTag.push(tag)

        this.setState({
            activeTag,
            // tagAction: tag
        })
    }


    render() {
        const { activeTag, } = this.state
        // const { handeTagAction } = this.props
        return (
            <div className="TagBox">
                {tags.map(tag => {

                    const cls = activeTag.includes(tag) ? 'Tag active' : 'Tag'
                    return <span
                        key={tag}
                        className={cls}
                        onClick={() => {
                            this.handleClickTag(tag);
                            // handeTagAction(tag);
                        }}
                    >
                        {tag}
                    </span>
                })}
            </div>
        )
    }
}