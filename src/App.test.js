import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './custom-render';
import "@testing-library/jest-dom"
import "@testing-library/dom"
import "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from './App';
import { todos } from './makeTodos';
import Axios from 'axios';

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
}));


describe("the <App /> component", () => {
	it ("renders <App /> component correctly", async () => {
		render(<App />);

		await waitForElementToBeRemoved(()=> screen.getByText(/fetching todos/i))
		expect(screen.getByText(/Getting started with React testing library/i)).toBeInTheDocument();
		await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));
		});

	it("renders todo, and one can click to view a todo item", async () => {
		render(<App/ >);
		
		await waitForElementToBeRemoved(() => screen.getByText(/fetching todos/i));

		todos.slice(0, 15).forEach((td) => {
			expect(screen.getByText(td.title)).toBeInTheDocument();
		});
		// click on a todo item and test the result. 

		const {id, title, userId, completed } = todos[0]
		Axios.get.mockImplementationOnce(() => Promise.resolve({
			data: {id, title, userId, completed},
		}))
		userEvent.click(screen.getByTestId(String(id)));
		await waitForElementToBeRemoved(() =>
		  screen.getByText(`Fetching todo item ${String(id)}`)
		);

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(`Added by: ${userId}`)).toBeInTheDocument();
		switch (completed) {
		case true:
			expect(
			screen.getByText(/This item has been completed/)
			).toBeInTheDocument();
			break;
		case false:
			expect(
			screen.getByText(/This item is yet to be completed/)
			).toBeInTheDocument();
			break;
		default:
			throw new Error("No match");
			}
  
	
	})


	}
);
