import React from 'react';
import axios from 'axios';

import Content from './Content';

import './css/Search.css';


class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
        };
    }
    async search() {
        let select_data = document.getElementsByClassName("select")[0].value;
        let keyword = document.getElementsByClassName("search")[0].value;

        let data = await axios.get(`http://mgt-react-express.herokuapp.com/search/${select_data}/${keyword}`);
        this.setState({
            items : data.data.items
        });
        console.log(this.state.items[0].title);
    };

    render() {
        return (
            <div className="Search">
                <div className="Search_box">
                    <select name="select" className="select">
                        <option value="blog">블로그</option>
                        <option value="news">뉴스</option>
                        <option value="book">책</option>
                        <option value="movie">영화</option>
                    </select>
                    <input type="text" className="search"/>
                    <button onClick={this.search.bind(this)}>검색</button>
                </div>
                <div className="Content_box">
                    {
                        this.state.items.map((item,i) => {
                            return (
                                <Content title={item.title}
                                         bloggerlink={item.bloggerlink}
                                         bloggername={item.bloggername}
                                         description={item.description}
                                         link={item.link}
                                         postdate={item.postdate === undefined ? item.pubdate === undefined ? item.pubDate : item.pubdate : item.postdate}
                                         key={i}
                                />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Search;