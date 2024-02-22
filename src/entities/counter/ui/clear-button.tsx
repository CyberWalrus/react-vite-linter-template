import { useCounterStore } from '../model/store';

export const ClearButton = () => {
    const handleClear = useCounterStore(({ clear }) => clear);

    return (
        <button
            onClick={handleClear}
            type='button'
        >
            clear
        </button>
    );
};
