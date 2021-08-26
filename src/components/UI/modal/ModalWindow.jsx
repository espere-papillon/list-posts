import React from 'react';
import s from "./ModalWindow.module.css"

export const ModalWindow = ({children, visible, setVisible}) => {
  let rootClass = [s.modal]
  if(visible) {
    rootClass.push(s.active)
  }

  return (
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
      <div className={s.modalContent} onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
