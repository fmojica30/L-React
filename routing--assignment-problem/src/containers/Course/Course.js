import React, { Component } from 'react';

class Course extends Component {
	state = {
		title: null,
		id: null
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		// console.log(this.props.location.search);
		this.setState({title:query.get('title')});
		console.log(this.props)
	}

	render () {

		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>You selected the Course with ID: {this.props.match.params.courseId}</p>
			</div>
		);
	}
}

export default Course;