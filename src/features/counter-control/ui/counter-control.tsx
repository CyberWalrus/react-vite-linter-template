import { useCounterStore } from '$entities/counter';

export const CounterControl = () => {
    const [handleIncrement, handleDecrement, handleClear] = useCounterStore(({ clear, increment, decrement }) => [
        increment,
        decrement,
        clear,
    ]);

    return (
        <div>
            <button
                data-test-id='counter-decrement'
                onClick={handleDecrement}
                type='button'
            >
                -
            </button>
            <button
                data-test-id='counter-clear'
                onClick={handleClear}
                type='button'
            >
                clear
            </button>
            <button
                data-test-id='counter-increment'
                onClick={handleIncrement}
                type='button'
            >
                +
            </button>
        </div>
    );
};
