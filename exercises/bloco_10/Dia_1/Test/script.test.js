const myBeverage = {
  delicious: true,
  sour: false,
};

describe('Xablau', () => {
  test('Delicia', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('suor', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});