import React from 'react';
import s from "../styles/Post.module.css"
import {Post} from "./Post";

export const PostsList = props => {
  return (
    <div >
      <h1 className={s.postsListTitle}>{props.title}</h1>
      {props.posts.map((post, index) => <Post key={post.id} number={index+1} post={post} remove={props.remove}/>)}
    </div>
  );
};
