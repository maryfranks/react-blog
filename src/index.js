import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import './index.css'

var post = {
  title: "Dinosaurs are awesome",
  authors: [
    "Stealthy Stegoasaurus",
    "Tiny T-Rex",
    "Ivory Iguanodon"
  ],
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
  authors={post.authors}
  body={post.body}
  comments={post.comments}/>,
  document.getElementById('root')
);
