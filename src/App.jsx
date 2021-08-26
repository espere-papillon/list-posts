import React, {useState} from 'react';
import "./styles/App.css"
import {PostsList} from "./components/PostsList";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {ModalWindow} from "./components/UI/modal/ModalWindow";
import {Button} from "./components/UI/button/Button";
import {usePosts} from "./hooks/usePosts"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JS", body: "JS - programming language"},
    {id: 2, title: "Python", body: "Python - programming language"},
    {id: 3, title: "Java", body: "Java - programming language"},
  ])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (post) => {
    setPosts([...posts, post])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={"App"}>
      <Button style={{"marginTop": "20px"}} onClick={() => setModal(true)}>Add post</Button>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </ModalWindow>
      <hr className="separator"/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostsList posts={sortedAndSearchedPosts} title={"Posts list"} remove={removePost}/>
    </div>
  );
}

export default App;
