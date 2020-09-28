import King from './King';

describe('Testing King:', () => {
  const K = new King(1);

  const start = {
    row: 3,
    col: 3 
  };
  let end;
  
  test('North move as valid move.', () => {
    // decrease in row
    end = {
      row: 2,
      col: 3 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  });

  test('South move as valid move.', () => {
    // increase in row
    end = {
      row: 4,
      col: 3 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  });

  test('East move as a valid move.', () => {
    // increase in column
    end = {
      row: 3,
      col: 4 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  });

  test('West move as a valid move.', () => {
    // decrease in column
    end = {
      row: 3,
      col: 2
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  });

  test('North-West move as a valid move', () => {
    // -row, -col
    end = {
      row: 2,
      col: 2
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('North-East move as a valid move', () => {
    // -row, +col
    end = {
      row: 2,
      col: 4 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('South-West move as a valid move', () => {
    // +row, -col
    end = {
      row: 4,
      col: 2 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('South-East move as a valid move', () => {
    // +row/+col
    end = {
      row: 4,
      col: 4 
    };
    expect(K.isMovePossible(start, end)).toBe(true);
  })

  test('Should fail for a knight\'s move.', () => {
    // knights move is +2row, +1col or some eKuivalent
    end = {
      row: 5,
      col: 4 
    };
    expect(K.isMovePossible(start, end)).toBe(false);
  })

})