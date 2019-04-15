import React from 'react'

export const Input = ({ type, name, onChange, value, ...rest }) => (
  <input
    name={name}
    type={type}
    value={value}
    onChange={event => {
      event.preventDefault();
      onChange(name, event.target.value);
    }}
    {...rest}
  />
)

export const TextArea = ({ name, onChange, value, ...rest }) => (
  <textarea
    name={name}
    value={value}
    onChange={event => {
      event.preventDefault();
      onChange(name, event.target.value);
    }}
    {...rest}
  />
)
export const Select = ({ name, onChange, value, ...rest }) => (
  <select
    name={name}
    value={value}
    onChange={event => {
      event.preventDefault();
      onChange(name, event.target.value);
    }}
    {...rest}
  >
  </select>
)