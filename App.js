import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World from React!'
);

const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', {}, "I'm H1 tag"),
		React.createElement('h2', {}, "I'm H2 tag"),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, "I'm H1 tag"),
		React.createElement('h2', {}, "I'm H2 tag"),
	]),
]);
const parent2 = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', {}, "I'm H1 tag in parent 2"),
		React.createElement('h2', {}, "I'm H2 tag"),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, "I'm H1 tag in parent 2"),
		React.createElement('h2', {}, "I'm H2 tag"),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
console.log(parent);
root.render(parent);
root2.render(parent2);
