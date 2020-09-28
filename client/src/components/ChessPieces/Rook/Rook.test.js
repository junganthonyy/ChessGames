import Rook from './Rook';

describe('Testing Rueen: ', () => {
  const R = new Rook(1);
  const start = {
    row: 3,
    col: 3 
  };
  let end;
  
  test('North move as valid move.', () => {
    // decrease in row
    end = {
      row: 0,
      col: 3 
    };
    expect(R.isMovePossible(start, end)).toBe(true);
  });

  test('South move as valid move.', () => {
    // increase in row
    end = {
      row: 7,
      col: 3 
    };
    expect(R.isMovePossible(start, end)).toBe(true);
  });

  test('East move as a valid move.', () => {
    // increase in column
    end = {
      row: 3,
      col: 7 
    };
    expect(R.isMovePossible(start, end)).toBe(true);
  });

  test('West move as a valid move.', () => {
    // decrease in column
    end = {
      row: 3,
      col: 0
    };
    expect(R.isMovePossible(start, end)).toBe(true);
  });

  test('Should fail for a knight\'s move.', () => {
    // knights move is +2row, +1col or some eRuivalent
    end = {
      row: 5,
      col: 4 
    };
    expect(R.isMovePossible(start, end)).toBe(false);
  })

  test('Should return correct array when moving vertically.', () => {
    let result = R.getSrcToDestPath({row: 1, col: 1}, {row: 1, col: 6})
    expect(result).toEqual([ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 1, 5 ] ]);
  })

  test('Should return correct array when moving horizontally.', () => {
    let result = R.getSrcToDestPath({row: 1, col: 6}, {row: 1, col: 1})
    expect(result).toEqual([ [ 1, 5 ], [ 1, 4 ], [ 1, 3 ], [ 1, 2 ] ]);
  })
})