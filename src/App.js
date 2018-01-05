// bring in React and Component from React

import React, {Component} from 'react';
import './App.css'
import Comment from './Comment.js';

// define our Hello component
class Post extends Component {
  // what should the component render?
  render () {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    // make sure to return some UI
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>by {this.props.author}</h2>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        {allComments}
      </div>
    )
  }
}

export default Post
