import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Courses.css';

import Course from '../Course/Course';

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: 'Angular - The Complete Guide' },
			{ id: 2, title: 'Vue - The Complete Guide' },
			{ id: 3, title: 'PWA - The Complete Guide' }
		]
	}

	render () {
		return (
			<div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{
						this.state.courses.map( course => {
								return (
									<div>
										<article className="Course" key={course.id}>
											<Link to={{
												pathname: this.props.match.url + "/" + course.id,
												search: "?title=" + course.title
											}}>{course.title}</Link>
										</article>
									</div>
								);
						} )
					}
				</section>
				<Route path={this.props.match.url + "/:courseId"} component={Course} />
			</div>
		);
	}
}

export default Courses;