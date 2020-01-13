import React, { Component } from 'react';
import axios from '../../../Axios';

import Post from '../../../components/Post/Post';

import './Posts.css';


class posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    });
  };

  componentDidMount() {
    console.log(this.props);
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({
          posts: updatedPosts
        })
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let posts = <p style={{textAlign:'center'}}>Something went wrong</p>

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            Key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
            />
        );
      });
    }

    return(
      <section className="Posts">
        {posts}
      </section>
    )
  };
}

export default posts;