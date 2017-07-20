import test from 'ava';
import m from './';

test('main', t => {
	const commitMessage = m();
	console.log('commit:', commitMessage);
	t.false(commitMessage > 0);
});
