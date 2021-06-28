import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames';

export default function Hamburger({ className, isSidebarOn, setIsSidebarOn }) {

  const toggleButton = (e) => {
    e.stopPropagation()
    setIsSidebarOn(oldState => !oldState);
  };

  return (
    <button
      onClick={toggleButton}
      className={classnames(
        'hover:bg-blue-400 active:bg-blue-400 text-black transition duration-200 ease-in bg-blue-200 w-16 h-16 rounded-full shadow hover:shadow-xl',
        className
      )}
    >
      {isSidebarOn ? (
        <CloseIcon fontSize="large" />
      ) : (
        <MenuIcon fontSize="large" />
      )}
    </button>
  );
}
