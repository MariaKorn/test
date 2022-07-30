import React from 'react';
import './button.css';

export const Button = (props) => {
  // props.symbol
  // props.onClick
  // props.isActiv 
    return <button onClick={()=>{props.onClick(props.symbol)}}
    className={props.isActive ? 'activeButton' : ''}>
      {props.symbol}

      </button>;
};
