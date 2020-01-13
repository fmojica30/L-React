import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link, NavLink, Switch} from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Post from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    
	render () {
	
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li><NavLink to="/posts" 
									activeClassName="my-active"
									activeStyle={{
										color: '#fa923f',
										textDecoration: "underline"
									}}>Posts</NavLink></li>
							<li>
								<NavLink to={{
										pathname: "/new-post",
										hash: "#submit"
								}}>
								New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={() => <h1>Home</h1>}/>\
				<Route path="/" exact render={() => <h1>Home 2</h1>}/> */}
				<Switch>
					<Route path="/" exact component={Posts}/>
					<Route path="/new-post" exact component={NewPost}/>
					<Route path="/:id" exact component={Post}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;