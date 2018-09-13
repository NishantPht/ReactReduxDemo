/*
 * @file: App.js
 * @description: Top Layer or Parent Component of Application
 * @date: 14.September.2018
 * @author: Nishant Singh
 * */




import React, { Component } from 'react';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost';


class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Just Post It</h2>
    </div>
    <PostForm />
    <AllPost />
</div>
);
}
}
export default App;

