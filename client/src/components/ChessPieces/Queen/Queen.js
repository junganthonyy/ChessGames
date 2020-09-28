import Piece from '../piece.js';

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

    return path;
  }
}
