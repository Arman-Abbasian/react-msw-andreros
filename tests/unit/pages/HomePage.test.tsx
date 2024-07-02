import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import HomePage from '@/pages/HomePage/HomePage';

describe('Home page', () => {
    it('Component should render correctly', () => {
        const { container } = render(<HomePage />);

        // select component root element by class name
        const rootElement = container.getElementsByClassName('rsa-home-page');

        //assert the expected result
        expect(rootElement.length).toBe(1);
    });

    // it('Counter value should decrement when decrement button is clicked', () => {
    //     render(<Counter />);

    //     //select the elements you want to interact with
    //     const counter = screen.getByTestId('counter');
    //     const decrementBtn = screen.getByTestId('decrement');

    //     //interact with those elements
    //     fireEvent.click(decrementBtn);

    //     //assert the expected result
    //     expect(counter).toHaveTextContent('-1');
    // });

    // it('Counter value should increment when increment button is clicked', () => {
    //     render(<Counter />);

    //     //select the elements you want to interact with
    //     const counter = screen.getByTestId('counter');
    //     const incrementBtn = screen.getByTestId('increment');

    //     //interact with those elements
    //     fireEvent.click(incrementBtn);

    //     //assert the expected result
    //     expect(counter).toHaveTextContent('1');
    // });
});
