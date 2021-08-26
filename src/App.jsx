import React, {useState} from 'react';
import "./styles/App.css"
import {PostsList} from "./components/PostsList";
import {PostForm} from "./components/PostForm";
import {Select} from "./components/UI/select/Select";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JS", body: "JS - programming language"},
    {id: 2, title: "Python", body: "Python - programming language"},
    {id: 3, title: "Java", body: "Java - programming language"},
  ])
  const [selectedSort, setSelectedSort] = useState("")

  const createPost = (post) => {
    setPosts([...posts, post])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className={"App"}>
      <PostForm create={createPost}/>
      <hr className="separator"/>
      <Select value={selectedSort} onChange={sortPost} defaultValue={"Sorting"}
              options={[{value: "title", name: "Sort by title"}, {value: "body", name: "Sort by description"}]}/>
      {posts.length
        ? <PostsList posts={posts} title={"Posts list"} remove={removePost}/>
        : <h2 className="labelPostsNotFound">Posts not found</h2>}
    </div>
  );
}

export default App;
