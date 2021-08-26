import React from 'react';
import {Input} from "../components/UI/input/Input";
import {Select} from "../components/UI/select/Select";

export const PostFilter = ({filter, setFilter}) => {
  return (
    <>
      <Input type="text" placeholder="Search" value={filter.query}
             onChange={event => setFilter({...filter, query: event.target.value})}/>
      <Select value={filter.sort} onChange={sort => setFilter({...filter, sort: sort})} defaultValue={"Sorting"}
              options={[{value: "title", name: "Sort by title"}, {value: "body", name: "Sort by description"}]}/>
    </>
  );
};
