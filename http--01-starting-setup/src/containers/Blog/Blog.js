import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import asyncComponent from '../../HOC/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	state = {
		auth: true
	}
    
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
					{this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
					<Route path="/posts" component={Posts}/>
					{/* Used to redirect for when pages are not recognized but cannot
					be used with redirect
					<Route render={() => <h1>Not Found</h1>} */}
					{/* < Route path = "/" component = {Posts}/> */}
					<Redirect from="/" to="/posts"/>
				</Switch>
			</div>
		);
	}
}

export default Blog;