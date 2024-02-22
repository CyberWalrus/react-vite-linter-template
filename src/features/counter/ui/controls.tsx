import { useCounterStore } from '../model/store';

export const Controls = () => {
    const [handleIncrement, handleDecrement, handleClear] = useCounterStore(({ clear, increment, decrement }) => [
        increment,
        decrement,
        clear,
    ]);

    return (
        <section>
            <button
                onClick={handleDecrement}
                type='button'
            >
                +
            </button>
            <button
                onClick={handleClear}
                type='button'
            >
                clear
            </button>
            <button
                onClick={handleIncrement}
                type='button'
            >
                -
            </button>
        </section>
    );
};
