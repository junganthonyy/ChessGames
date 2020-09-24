import React from 'react';
import Square from '../square/square';

import classes from './row.module.css';

function Row(props) {
  console.log(props.rowState)
  return (
    <div className={classes.Row}>
      {
        props.rowState.map((piece, i) => (
        <Square 
          row={props.rowNumber} 
          column={i} 
          key={`Row-${props.rowNumber}-Column-${i}`}
          piece={piece}
        > 
          <div>K</div>
        </Square>
        ))
      }
    </div>
  );
}

export default Row;