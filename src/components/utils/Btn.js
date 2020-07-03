import React from 'react';

const Btn = (props) => {
  return ( <button onClick={props.click} className="center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>{props.action}</span>
            </button> )
}

export default Btn;