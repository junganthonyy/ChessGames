import Piece from '../Piece';

export default class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? "WKBishop.svg" : "BBishop.svg"));
  }

  isMovePossible(src, dest) {
    // knights moves 2 spaces in 1 direction, and 1 space in the other direction
    const diffs = [Math.abs(dest.col - src.col), Math.abs(dest.row - src.row)];

    return (diffs.indexOf(1) !== -1 && diffs.indexOf(2) !== -1);
  }

  getSrcToDestPath(src, dest) {
    return [];
  }
}