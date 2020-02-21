import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        posts: [ ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            console.log(response)
                this.setState({
                    posts: response.data.slice(10, 30)
                })
            })
    }

    limitedCharacterTitle(title) {
        if(title.length > 25) {
            return title.slice(0, 25) + '...';
        } else {
            return title;
        }
    }

    limitedCharacterBody(body) {
        if(body.length > 60) {
            return body.slice(0, 60) + '...';
        } else {
            return body;
        }
    }

    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card sticky-action medium z-depth-1" key= {post.id}>
                        {/* image section */}
                        <div className="card-image waves-effect waves-light">
                            <img className="activator" src="https://source.unsplash.com/random"/>
                        </div>
                        {/* card content section */}
                        <div className="card-content">
                            {/* <Link to = {'/' + post.id}> */}
                                <span className="card-title activator indigo-text">
                                    {this.limitedCharacterTitle(post.title)}
                                </span>
                            {/* </Link> */}
                            <p className='paragraph-content blue-grey-text darken-1'>
                                {this.limitedCharacterBody(post.body)}
                            </p>
                            <Link to = {'/' + post.id}>
                                <span className ='card-action'>
                                    <i className="material-icons right">chevron_right</i>
                                    <p className='right pink-text darken-1'>read all</p>
                                </span>
                            </Link>

                        </div>
                        {/* Reveal Card section */}
                        <div className="card-reveal">
                            {/* <Link to = {'/' + post.id}> */}
                                <span className="card-title indigo-text">
                                    {post.title}
                                </span>
                            {/* </Link> */}
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                No posts yet
            </div>
        )
        return (
            <div className="container post-container">
                {postList}
            </div>
        )
    }
}

export default Home;