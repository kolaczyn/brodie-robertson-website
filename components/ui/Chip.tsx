import React from 'react';
import PropTypes from 'prop-types';

export default function Chip({ label, number, onClick, }) {
  return (
    <button className='group border-2 border-white rounded-md flex shadow-md hover:translate-x-6 hover:border-gray-300 transition duration-300' onClick={onClick}>
      <div className='px-2.5 py-1.5 group-hover:text-gray-300 transition duration-300'>{label}</div>
      <div className='bg-white text-body font-bold px-2.5 py-1.5 group-hover:bg-gray-300 transition duration-300'>{number} </div>
    </button>
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
}