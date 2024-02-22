import { useCounterStore } from '../model/store';

export const IncrementButton = () => {
    const handleIncrement = useCounterStore(({ increment }) => increment);

    return (
        <button
            onClick={handleIncrement}
            type='button'
        >
            +
        </button>
    );
};
