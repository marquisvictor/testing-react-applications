import React from 'react';
import axios from "axios";
import "@testing-library/jest-dom"
import "@testing-library/react"
import { render, screen, waitForElementToBeRemoved } from './custom-render';
import { TodoList } from './TodoList';
import { todos } from './makeTodos';

describe("Testing suite for the App Component", () => {
    it("Renders <TodoList /> component", async() => {
        render(<TodoList />);

        await waitForElementToBeRemoved(() => screen.getByText(/fetching todos/i))

        expect(axios.get).toHaveBeenCalledTimes(1);
        todos.slice(0, 15).forEach((td) => {
            expect(screen.getByText(td.title)).toBeInTheDocument();
        });
    });
});