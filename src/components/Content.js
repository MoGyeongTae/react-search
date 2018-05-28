import React from 'react';

import './css/Content.css';


class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <a href={this.props.link} dangerouslySetInnerHTML={{__html: this.props.title}} className="title"></a>
                <br/>
                <a href={this.props.bloggerlink} dangerouslySetInnerHTML={{__html: this.props.bloggername}} className="blogname"></a>
                <br/>
                <p dangerouslySetInnerHTML={{__html: this.props.description}} className="description"></p>
                <p dangerouslySetInnerHTML={{__html: `작성일 ${this.props.postdate}`}} className="date"></p>
            </div>
        )
    }
}

export default Content;