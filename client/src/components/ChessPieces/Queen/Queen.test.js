import Queen from './Queen';

describe('Testing Queen: ', () => {
  const Q = new Queen(1);
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
    expect(Q.isMovePossible(start, end)).toBe(true);
  });

  test('South move as valid move.', () => {
    // increase in row
    end = {
      row: 7,
      col: 3 
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  });

  test('East move as a valid move.', () => {
    // increase in column
    end = {
      row: 3,
      col: 7 
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  });

  test('West move as a valid move.', () => {
    // decrease in column
    end = {
      row: 3,
      col: 0
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  });

  test('North-West move as a valid move', () => {
    // -row, -col
    end = {
      row: 1,
      col: 1 
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  })

  test('North-East move as a valid move', () => {
    // -row, +col
    end = {
      row: 1,
      col: 5 
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  })

  test('South-West move as a valid move', () => {
    // +row, -col
    end = {
      row: 5,
      col: 1 
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  })

  test('South-East move as a valid move', () => {
    // +row/+col
    end = {
      row: 5,
      col: 5 
    };
    expect(Q.isMovePossible(start, end)).toBe(true);
  })

  test('Should fail for a knight\'s move.', () => {
    // knights move is +2row, +1col or some equivalent
    end = {
      row: 5,
      col: 4 
    };
    expect(Q.isMovePossible(start, end)).toBe(false);
  })

  test('Should return correct array when moving vertically.', () => {
    let result = Q.getSrcToDestPath({row: 1, col: 1}, {row: 1, col: 6})
    expect(result).toEqual([ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 1, 5 ] ]);
  })

  test('Should return correct array when moving horizontally.', () => {
    let result = Q.getSrcToDestPath({row: 1, col: 6}, {row: 1, col: 1})
    expect(result).toEqual([ [ 1, 5 ], [ 1, 4 ], [ 1, 3 ], [ 1, 2 ] ]);
  })

  test('Should return correct array when moving along major diagonal.', () => {
    let result = Q.getSrcToDestPath({row: 1, col: 1}, {row: 6, col: 6})
    expect(result).toEqual([ [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] ]);
  })

  test('Should return correct array when moving along minor diagonal.', () => {
    let result = Q.getSrcToDestPath({row: 4, col: 4}, {row: 8, col: 0})
    expect(result).toEqual([ [ 5, 3 ], [ 6, 2 ], [ 7, 1 ] ]);
  })

})