import React from 'react';
import {getPageCount, getPagination} from "../../../utils/pages"

export const Pagination = (props) => {
  const pagesArray = getPagination(props.totalPages)
  return (
    <div className="pagesWrapper">
      {pagesArray.map(p => <span key={p} className={props.page === p ? 'page pageCurrent' : 'page'} onClick={() => props.changePage(p)}>{p}</span>)}
    </div>
  );
};