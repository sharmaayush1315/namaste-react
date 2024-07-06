import { sum } from '../components/sum';

test('Sum function should return the sum of two numbers.', () => {
	expect(sum(2, 3)).toBe(5);
});
