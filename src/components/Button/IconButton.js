import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';

export const IconButton = (props) => {
  const { variant, label, handleClick, ...rest } = props;
  // const handleClick = () => {
  //   console.log('clicked');
  // };
  return (
    <button
      type='button'
      className={`btn ${variant} flex justify-center items-center`}
      {...rest}
      onClick={handleClick}
    >
      <RiMailSendLine className={'w-5 h-5 text-white mr-2'} />
      {label}
    </button>
  );
};
