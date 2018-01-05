import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import './index.css'

var post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegoasaurus",
  body: "Check out this body property!",
  comments: [
    "First!",
    "Great post",
    "Hire this author now!"
  ]
}

ReactDOM.render(
  <Post
  title={post.title}
  author={post.author}
  body={post.body}
  comments={post.comments}/>,
  document.getElementById('root')
);
