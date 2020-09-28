import Piece from '../piece.js';

export default class Rook extends Piece {
  constructor(player){
    super(player, (player === 1? "WRook.svg" : "BRook.svg"));
  }

  isMovePossible(src, dest) {
    // now here we check if the move is possible
    // src will have a row & column
    // destination will also have a row & column
    // Rook can move number of spaces in 4 directions

    // vertical movement would mean that it stays in the same column
    // horizontal movement would mean it stays in the same row
    if (src.row === dest.row || src.col === dest.col) {
      return true;
    }
    return false;
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
