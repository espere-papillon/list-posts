import React from 'react';
import s from "./Input.module.css"

export const Input = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} type="text" className={s.input} {...props}/>
  );
});