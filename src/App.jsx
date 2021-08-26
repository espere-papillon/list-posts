import React, {useState} from 'react';
import "./styles/App.css"
import {PostsList} from "./components/PostsList";
import {PostForm} from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JS", body: "JS - programming language"},
    {id: 2, title: "Python", body: "Python - programming language"},
    {id: 3, title: "Java", body: "Java - programming language"},
    ])

  const createPost = (post) =>{
    setPosts([...posts, post])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={"App"}>
      <PostForm create={createPost} />
      <PostsList posts={posts} title={"Posts list"} remove={removePost} />
    </div>
  );
}

export default App;
