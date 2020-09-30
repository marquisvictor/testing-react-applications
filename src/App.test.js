import React from 'react';
import { render, screen } from './custom-render';
import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("the <App /> component", () => {
	it ("renders <App /> component correctly", () => {
		render(<App />);
		expect(screen.getByText(/Getting started with React testing library/i)).toBeInTheDocument();
		});
	}
);
