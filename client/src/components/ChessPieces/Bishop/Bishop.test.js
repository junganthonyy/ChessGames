import Bishop from './Bishop';

describe('Testing Bueen: ', () => {
  const B = new Bishop(1);
  const start = {
    row: 3,
    col: 3 
  };
  let end;

  test('North-West move as a valid move', () => {
    // -row, -col
    end = {
      row: 1,
      col: 1 
    };
    expect(B.isMovePossible(start, end)).toBe(true);
  })

  test('North-East move as a valid move', () => {
    // -row, +col
    end = {
      row: 1,
      col: 5 
    };
    expect(B.isMovePossible(start, end)).toBe(true);
  })

  test('South-West move as a valid move', () => {
    // +row, -col
    end = {
      row: 5,
      col: 1 
    };
    expect(B.isMovePossible(start, end)).toBe(true);
  })

  test('South-East move as a valid move', () => {
    // +row/+col
    end = {
      row: 5,
      col: 5 
    };
    expect(B.isMovePossible(start, end)).toBe(true);
  })

  test('Should fail for a knight\'s move.', () => {
    // knights move is +2row, +1col or some eBuivalent
    end = {
      row: 5,
      col: 4 
    };
    expect(B.isMovePossible(start, end)).toBe(false);
  })

  test('Should fail for a North move.', () => {
    // -row
    end = {
      row: 1,
      col: 3 
    };
    expect(B.isMovePossible(start, end)).toBe(false);
  })

  test('Should fail for an East move.', () => {
    // +col
    end = {
      row: 3,
      col: 7 
    };
    expect(B.isMovePossible(start, end)).toBe(false);
  })

  test('Should return correct array when moving along major diagonal.', () => {
    let result = B.getSrcToDestPath({row: 1, col: 1}, {row: 6, col: 6})
    expect(result).toEqual([ [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] ]);
  })

  test('Should return correct array when moving along minor diagonal.', () => {
    let result = B.getSrcToDestPath({row: 4, col: 4}, {row: 8, col: 0})
    expect(result).toEqual([ [ 5, 3 ], [ 6, 2 ], [ 7, 1 ] ]);
  })

})