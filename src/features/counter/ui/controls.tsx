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
            <Button onClick={handleDecrement}>-</Button>
            <Button onClick={handleClear}>clear</Button>
            <Button onClick={handleIncrement}>+</Button>
        </Grid>
    );
};
