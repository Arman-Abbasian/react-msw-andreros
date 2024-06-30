import clsx from 'clsx';
import React, { useState } from 'react';

export type TCounterProps = {
    className?: string;
};

export const Counter: React.FC<TCounterProps> = ({ className }) => {
    const [counter, setCounter] = useState(0);

    const rootClasses = clsx('rsa-counter', className);

    const decrement = () => setCounter(counter - 1);

    const increment = () => setCounter(counter + 1);

    return (
        <div className={rootClasses}>
            <button data-testid="decrement" type="button" onClick={decrement}>
                -
            </button>
            <span data-testid="counter" className="rsa-counter__counter">
                {counter}
            </span>
            <button data-testid="increment" type="button" onClick={increment}>
                +
            </button>
        </div>
    );
};
