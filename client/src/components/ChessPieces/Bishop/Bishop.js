import Piece from '../Piece';

export default class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? "WKBishop.svg" : "BBishop.svg"));
  }

  isMovePossible(src, dest) {
    // bishops only move in diagonals
    // the difference in change should be equivalent for both row and column
    
    const rowDiff = Math.abs(dest.row - src.row);
    const colDiff = Math.abs(dest.col - src.col);
    return rowDiff === colDiff;
  }

  getSrcToDestPath(src, dest) {
    let path = [];

    let rowInterval = (dest.row - src.row) / (Math.abs(dest.row - src.row));
    let colInterval = (dest.col - src.col) / (Math.abs(dest.col - src.col));
    let diff = Math.abs(dest.row - src.row);;

    for (let i = 0; i < diff - 1; i++) {
      src.row += rowInterval;
      src.col += colInterval;
      path.push([src.row, src.col]);
    }

    return path;
  }
}