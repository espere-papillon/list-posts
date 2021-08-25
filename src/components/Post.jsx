import React from 'react';
import s from "../styles/Post.module.css"

export const Post = props => {
  return (
    <div className={s.post}>
      <div className={s.postContainer}>
        <div className={s.postName}><strong>{props.post.id}. {props.post.title}</strong></div>
        <div className={s.postDescription}>{props.post.body}</div>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};
