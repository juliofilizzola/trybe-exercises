const arr = [1, 2 ,3];
const obj = { a: 1, b: 2, c: 3};
const string = 'enshinua';
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    'nice.oven': true,
  },
  'ceiling.height': 2,
};

test('array and object equality', () => {

  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

it('Test enshinua', ()=> {
  expect(string).toMatch('enshinua');
})
it('Test do xablau', () => {
  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
});
it('Test Array', () => {
  expect(arr).toContain(3);
});
test('Obj test', () => {
 expect(houseForSale).toHaveProperty('bath');
});