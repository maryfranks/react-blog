import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Movie from './Movie.js';
import Food from './Food.js';
import './App.css';

const post = {
  title: "Baby's first post",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny trex",
    "Iguanadon Ivory"
  ],
  body: "look at me i'm a posting baby!",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const App = () => (
  <Router>
    <div>
      <nav>
      {/*
      The {" "} things are inserted after every link so React puts
      some empty whitespace between each link instead of cramming
      them all together.
      Also, this comment syntax is how you do comments in JSX.
      */}
        <Link to="/">Home</Link>{' '}
        <Link to="/blog">My Blog</Link>{' '}

      </nav>

      <hr/>

      <Route exact path="/" component={Home}/>

      <Route path="/blog" component={
        () => (<Blog title={post.title}
                  allAuthors={post.authors}
                  body={post.body}
                  comments={post.comments} />
        )}/>
    </div>
  </Router>
)

export default App
