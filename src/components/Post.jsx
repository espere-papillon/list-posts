import React from 'react';
import {Button} from "../components/UI/button/Button";

export const Post = props => {
  return (
    <div className="post">
      <div>
        <div><strong>{props.post.id}. {props.post.title}</strong></div>
        <div>{props.post.body}</div>
      </div>
      <div>
        <Button onClick={() => props.remove(props.post)}>Delete</Button>
      </div>
    </div>
  );
};
