import React, { Component } from 'react';
import axios from '../../../Axios';
// import{ Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

import './Posts.css';


class posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/' + id});
    // this.props.history.push('/' + id);
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
          // <Link to={'/' + post.id} key={post.id}>
            <Post
              key={post.id} 
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          // </Link>
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