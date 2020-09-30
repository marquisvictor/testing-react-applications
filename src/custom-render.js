import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from './AppContext'; 

// create a wrapper function that wraps the overall state on a memoryRouter that houses the children comp/props
const Wrapper = ({ children }) => {
    return (
        <AppProvider>
            <MemoryRouter> {children} </MemoryRouter>
        </AppProvider>
    );
};

const customRender = (ui, options) => render(ui, {wrapper: Wrapper, ...options});

// re-export everything
export * from '@testing-library/react';

// override render method
export {customRender as render};