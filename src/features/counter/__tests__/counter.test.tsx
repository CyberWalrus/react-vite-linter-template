/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-restricted-imports */
/* eslint-disable import/no-restricted-paths */
import { render } from '@testing-library/react';

import { Counter } from '../ui/counter';

vi.mock('zustand', () => {
    // Импорт реальных экспортов модуля zustand
    const actualZustand = vi.importActual<any>('$app/__mocks__/zustand');

    // Возвращаем объект с моковыми и реальными функциями
    return {
        ...actualZustand,
    };
});

describe.skip('Counter', () => {
    it('default', () => {
        const { baseElement } = render(<Counter />);

        expect(baseElement).toBeInTheDocument();
    });
});
