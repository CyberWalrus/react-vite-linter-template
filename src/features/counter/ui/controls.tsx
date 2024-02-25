import { Button, Grid } from '@radix-ui/themes';

import { useCounterStore } from '../model/store';

export const Controls = () => {
    const [handleIncrement, handleDecrement, handleClear] = useCounterStore(({ clear, increment, decrement }) => [
        increment,
        decrement,
        clear,
    ]);

    return (
        <Grid
            columns='3'
            gap='4'
        >
            <Button
                data-test-id='counter-decrement'
                onClick={handleDecrement}
            >
                -
            </Button>
            <Button
                data-test-id='counter-clear'
                onClick={handleClear}
            >
                clear
            </Button>
            <Button
                data-test-id='counter-increment'
                onClick={handleIncrement}
            >
                +
            </Button>
        </Grid>
    );
};
