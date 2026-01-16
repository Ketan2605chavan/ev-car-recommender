import { recommendCar } from './data';

test('returns EV with range >= given value', () => {
  const result = recommendCar(400);
  expect(result.name).toBe('MG ZS EV');
});
