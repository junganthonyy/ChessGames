import Piece from './piece.js';

export default class King extends Piece {
  constructor(player){
    super(player, (player === 1? "WKing.svg" : "BKing.svg"));
  }

  isMovePossible(src, dest) {
    // now here we check if the move is possible
    // src will have a row & column
    // destination will also have a row & column
    // kings can only move one space in 8 directions
    
    // destination row/column must be within -1 & + 1

    return ((dest.row <= src.row + 1 && dest.row >= src.row - 1) &&
            (dest.col <= src.col + 1 && dest.col <= src.col - 1)
    )
  }

  getSrcToDestPath(src, dest) {
    return [];
  }
}