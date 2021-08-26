import React from 'react';
import s from "../styles/Post.module.css"
import {Button} from "../components/UI/button/Button";

export const Post = props => {
  return (
    <div className={s.post}>
      <div className={s.postContainer}>
        <div className={s.postName}><strong>{props.number}. {props.post.title}</strong></div>
        <div className={s.postDescription}>{props.post.body}</div>
      </div>
      <div>
        <Button onClick={() => props.remove(props.post)}>Delete</Button>
      </div>
    </div>
  );
};
