import React, { useMemo, useState } from 'react';
import classes from './square.module.css';

function square(props) {
  const styles = [classes.Square];
  const [highlighted, updateHighlighted] = useState(false);
  let piece = null;
  // row 0 starts with white,
  // row 1 starts with black...

  if (props.row % 2 === 0) {
    if (props.column % 2 === 0) {
      styles.push(classes.Black)
    } else {
      styles.push(classes.White)
    }
  } else {
    if (props.column % 2 === 0) {
      styles.push(classes.White)
    } else {
      styles.push(classes.Black)
    }
  }

  if (highlighted) styles.push(classes.Highlighted);


  const toggleStatus = () => { updateHighlighted((prev) => !prev) }

  return (
    <div className={styles.join(' ')}
      onClick={toggleStatus} 
    >
      {piece}
    </div>
  );
}

export default square;