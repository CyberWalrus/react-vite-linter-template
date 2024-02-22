import { useCounterStore } from '../model/store';

export const DecrementButton = () => {
    const handleDecrement = useCounterStore(({ decrement }) => decrement);

    return (
        <button
            onClick={handleDecrement}
            type='button'
        >
            -
        </button>
    );
};
