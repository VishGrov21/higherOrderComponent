import React, { useState } from 'react';
import withMouseOver from '../hoc/withMouseOver.hoc';
import './post.style.scss';

const Post = ({ post, isHover }) => {
  // state of the application using react hooks
  const [randomColor, setrandomColor] = useState('#333');

  // method to generate random color
  const randomColorGenerator = () => {
    const color = `rgb(${Math.random().toFixed(1) * 256},${Math.random().toFixed(1) * 256},${
      Math.random().toFixed(1) * 256
    })`;
    setrandomColor(color);
  };
  
  return (
    // This method will generate card-container to hold the post
    // where-in each post will possess a title & body
    // Along with this it will display the state of the mouse event based
    // on isHover Prop received from withMouseOver HOC.
    <div
      className='post'
      style={{ backgroundColor: randomColor }}
      onClick={() => randomColorGenerator()}>
      <h1>{post.title}</h1>
      <p> {post.body} </p>
      <p className='mouse-style'>
        Current Mouse State:{' '}
        <span className='mouse-state'>{isHover ? 'Mouse Over' : 'Mouse Out'}</span>
      </p>
    </div>
  );
};

export default withMouseOver(Post);
