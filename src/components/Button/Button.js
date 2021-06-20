import React from 'react';

export const Button = (props) => {
  const { variant, label, handleClick, ...rest } = props;
  // const handleClick = () => {
  //   console.log('clicked');
  // };
  return (
    <button
      type='submit'
      className={`btn ${variant}`}
      {...rest}
      onSubmit={handleClick}
    >
      {label}
    </button>
  );
};
