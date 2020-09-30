import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './custom-render';
import "@testing-library/jest-dom"
import "@testing-library/dom"
import "@testing-library/react"
import App from './App';


describe("the <App /> component", () => {
	it ("renders <App /> component correctly", async () => {
		render(<App />);

		await waitForElementToBeRemoved(()=> screen.getByText(/fetching todos/i))
		expect(screen.getByText(/Getting started with React testing library/i)).toBeInTheDocument();
		});
	}
);
