import React from 'react'
import classnames from 'classnames';

export default function Hamburger({ className }) {
  return (
    <button className={classnames(['hover:bg-blue-400 text-black transition duration-200 ease-in bg-blue-200 w-16 h-16 rounded-full shadow hover:shadow-xl', className])}>X</button>
  )
}
