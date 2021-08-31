import React from 'react';
import {Button} from "../components/UI/button/Button";
import {useHistory} from 'react-router-dom'

export const Post = props => {
  const router = useHistory()
  return (
    <div className="post">
      <div>
        <div><strong>{props.post.id}. {props.post.title}</strong></div>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <Button onClick={() => router.push(`/posts/${props.post.id}`)}>Open</Button>
        <Button onClick={() => props.remove(props.post)}>Delete</Button>
      </div>
    </div>
  );
};
