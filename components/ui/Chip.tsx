import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

interface ChipPropTypes {
  label: string;
  number: number;
  onClick: () => void;
  active: boolean;
}
export default function Chip({
  label,
  number,
  onClick,
  active,
}: ChipPropTypes) {
  return (
    <button
      className={classnames(
        'focus:outline-none group border-2 border-white rounded-md flex shadow-md hover:translate-x-6 hover:border-green-100 transition duration-300',
        { 'border-green-300': active }
      )}
      onClick={onClick}
    >
      <div
        className={classnames(
          'px-2.5 py-1.5 group-hover:text-green-100 transition duration-300',
          { 'text-green-300': active }
        )}
      >
        {label}
      </div>
      <div
        className={classnames(
          'bg-white text-body font-bold px-2.5 py-1.5 group-hover:bg-green-100 transition duration-300',
          { 'bg-green-300': active }
        )}
      >
        {number}{' '}
      </div>
    </button>
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Chip.defaultProps = {
  active: false,
};
