import React, { useState } from 'react';
import Row from './row/row';
import classes from './board.module.css';

function board(props) {

  let initalBoard = new Array(8).fill('').map(() => new Array(8).fill(''));

  let [boardState, updateBoardState] = useState(initalBoard);

  return (
    <div className={classes.Board}>
      {
        boardState.map((rowState, rowNumber) => (
          <Row rowNumber={rowNumber} rowState={rowState} key={`row-${rowNumber}`}/>
        ))
      }
    </div>
  );
}

export default board;