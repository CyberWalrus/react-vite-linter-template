import { useCounterStore } from '../model/store';

export const CounterInfo = () => {
    const counter = useCounterStore(({ value }) => value);

    return <p data-test-id='counter-value'>{counter}</p>;
};
