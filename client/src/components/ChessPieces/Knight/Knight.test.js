import Knight from './Knight';

describe('Testing Bueen: ', () => {
  const K = new Knight(1);
  const start = {
    row: 3,
    col: 3 
  };
  let end;

  test('2 North, 1 West as valid move.', () => {
    // -2 row, -1 col
    end = {
      row: 1,
      col: 2 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('1 North, 2 West as valid move.', () => {
    // -1 row, -2 col
    end = {
      row: 2,
      col: 1 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('2 North, 1 East as valid move.', () => {
    // -2 row, +1 col
    end = {
      row: 1,
      col: 4
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('1 North, 2 East as valid move.', () => {
    // -1 row, +2 col
    end = {
      row: 2,
      col: 5
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('2 South, 1 West as valid move.', () => {
    // +2 row, -1 col
    end = {
      row: 5,
      col: 2 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('1 South, 2 West as valid move.', () => {
    // +1 row, -1 col
    end = {
      row: 4,
      col: 1 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('2 South, 1 East as valid move.', () => {
    // +2 row, +1 col
    end = {
      row: 5,
      col: 4
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('1 South, 2 East as valid move.', () => {
    // +1 row, +2 col
    end = {
      row: 4,
      col: 5
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  // ------------------------Tests for invalid moves------------------------

  test('2 South, 2 East as invalid move.', () => {
    // +2 row, +2 col
    end = {
      row: 5,
      col: 5
    };
    expect(K.isMovePossible(start, end)).toBe(false);
  })

  test('2 East as invalid move.', () => {
    // +0 row, +2 col
    end = {
      row: 3,
      col: 5
    };
    expect(K.isMovePossible(start, end)).toBe(false);
  })
})