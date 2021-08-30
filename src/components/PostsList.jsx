import React from 'react';
import {Post} from "./Post";
import {TransitionGroup, CSSTransition} from "react-transition-group"

export const PostsList = props => {
  if (!props.posts.length) {
    return <h2 className="labelPostsNotFound">Posts not found</h2>
  }

  return (
    <div>
      <h2 className="postsListTitle">{props.title}</h2>
      <TransitionGroup>
        {props.posts.map((post, index) => <CSSTransition key={post.id} timeout={500} className="post">
          <Post number={index + 1} post={post} remove={props.remove}/>
        </CSSTransition>)}
      </TransitionGroup>
    </div>
  );
};
