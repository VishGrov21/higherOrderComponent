import React, { Component } from 'react';
import Post from './Post.component';

import './posts.styles.scss';

class Posts extends Component {
  // state to hold the posts
  state = {
    posts: [],
  };
  // call an jsonplaceholder posts api in componentDidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data.slice(0, 3) }));
  }
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Posts:</h1>
        {this.state.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default Posts;
