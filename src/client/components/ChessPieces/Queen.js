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
      // check that we're on a diagonal
    }
    return false;
  }

  getSrcToDestPath(src, dest) {
    return [];
  }
}