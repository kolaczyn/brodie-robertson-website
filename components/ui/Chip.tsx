import React from 'react';
import PropTypes from 'prop-types';

export default function Chip({ label, number, onClick, }) {
  return (
    <button className='border-2 border-white rounded-md flex shadow-md' onClick={onClick}>
      <div className='p-1'>{label}</div>
      <div className='bg-white text-gray-900 font-bold p-1'>{number} </div>
    </button>
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
}