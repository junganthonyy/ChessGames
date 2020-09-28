import Piece from './piece.js';

export default class Queen extends Piece {
  constructor(player){
    super(player, (player === 1? "WQueen.svg" : "BQueen.svg"));
  }

  isMovePossible(src, dest) {
    // now here we check if the move is possible
    // src will have a row & column
    // destination will also have a row & column
    // kings can move number of spaces in 8 directions
    
    // destination row/column must be within -1 & + 1
    
    // vertical movement would mean that it stays in the same column
    // horizontal movement would mean it stays in the same row

    // diagonals mean that we move row & column the same amnt

    if (src.row === dest.row || src.col === dest.col) {
      return true;
    } else {
      // a move on a diagonal, it's ±x/±x same amnt move in row column
      return Math.abs(src.row - dest.row) === Math.abs(src.col - dest.col)
    }
  }

  getSrcToDestPath(src, dest) {
    let path = [];

    let rowInterval;
    let colInterval;
    let diff;

    if (src.row - dest.row === 0) {
      rowInterval = 0;
    } else {
      rowInterval = (dest.row - src.row) / (Math.abs(dest.row - src.row));
      diff = Math.abs(dest.row - src.row);
    }
    if (src.col - dest.col === 0) {
      colInterval = 0;
    } else {
      colInterval = (dest.col - src.col) / (Math.abs(dest.col - src.col));
      diff = Math.abs(dest.col - src.col);
    }
    
    for (let i = 0; i < diff - 1; i++) {
      src.row += rowInterval;
      src.col += colInterval;
      path.push([src.row, src.col]);
    }



    // // check if on same row or column
    // if (src.row === dest.row) {
    //   // then we're moving horizontally on the same row
    //   let diff = Math.abs(dest.col - src.col);
    //   let interval = ((dest.col - src.col) > 0 ? 1 : -1);
    //   let curr = src.col;

    //   // diff - 1 because we don't want to
    //   // include the start and the end
    //   for (let i = 0; i < diff - 1 && curr > 0; i += 1) {
    //     curr += interval;
    //     path.push([src.row, curr])
    //   }
    // } else if (src.col === dest.col) {
    //   // then we're moving horizontally on the same row
    //   let diff = Math.abs(dest.row - src.row);
    //   let interval = ((dest.row - src.row) > 0 ? 1 : -1);
    //   let curr = src.col;

    //   // diff - 1 because we don't want to
    //   // include the start and the end
    //   for (let i = 0; i < diff - 1 && curr > 0; i += 1) {
    //     curr += interval;
    //     path.push([curr, src.col])
    //   }
    // } else {
    //   // now we're dealing with diagonals
    //   let rowInterval = (dest.row - src.row) / (Math.abs(dest.row - src.row));
    //   let colInterval = (dest.col - src.col) / (Math.abs(dest.col - src.col));
    //   let diff = Math.abs(dest.col - src.col);
      
    //   for (let i = 0; i < diff - 1; i++) {
    //     src.row += rowInterval;
    //     src.col += colInterval;
    //     path.push([src.row, src.col]);
    //   }
    // }
    return path;
  }
}
