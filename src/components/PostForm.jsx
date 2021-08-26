import React, {useState} from 'react';
import {Input} from "../components/UI/input/Input";
import {Button} from "../components/UI/button/Button";

export const PostForm = props => {
  // const bodyInputRef = useRef()
  const [post, setPost] = useState({title: "", body: ""})

  const addNewPost = event => {
    event.preventDefault()
    // setPosts([...posts, {id: Date.now(), title: titleInput, body: bodyInputRef.current.value}])
    props.create({id: Date.now(), ...post})
    setPost({title: "", body: ""})
  }

  return (
    <form>
      <Input type="text" placeholder="Post title" value={post.title} onChange={event => setPost({...post, title: event.target.value})}/>
      <Input type="text" placeholder="Post description" value={post.body} onChange={event => setPost({...post, body: event.target.value})}/>
      {/*<Input ref={bodyInputRef} type="text" placeholder="Post description"/>*/}
      <Button onClick={addNewPost}>Add post</Button>
    </form>
  );
};