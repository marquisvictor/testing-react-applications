import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './custom-render';
import App from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("the <App /> component", () => {
	it ("renders <App /> component correctly", async () => {
		render(<App />);
		expect(screen.getByText(/Getting started with React testing library/i)).toBeInTheDocument();
		await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));
		});
	}
);
