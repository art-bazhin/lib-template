import { sum } from './sum';

describe('sum', () => {
  it('returns sum of two arguments', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 1)).toBe(1);
    expect(sum(1, 0)).toBe(1);
    expect(sum(2, 2)).toBe(4);
  });
});
