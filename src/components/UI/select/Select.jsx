import React from 'react';
import s from "./Select.module.css"

export const Select = ({options, defaultValue, value, onChange, ...props}) => {
  return (
    <select className={s.select} value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
  );
};