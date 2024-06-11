import { describe, expect, it } from 'vitest';

import { substituteVariables } from '../lib/substitute-variables';

describe('replaceVars', () => {
    it('возвращает исходную строку, если нет переменных для замены', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, world!',
        });
        expect(result).toBe('Hello, world!');
    });

    it('возвращает константу, если result равен constant и showMissingConstant = true', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'CONSTANT',
            showMissingConstant: true,
        });
        expect(result).toBe('CONSTANT');
    });

    it('возвращает исходную строку при отсутствии переменных и showMissingConstant = false', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, world!',
            showMissingConstant: false,
        });
        expect(result).toBe('Hello, world!');
    });

    it('заменяет переменные в строке, если они присутствуют в props', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, {USER}!',
            props: { user: 'John' },
        });
        expect(result).toBe('Hello, John!');
    });

    it('сохраняет переменную, если она не найдена в props и showMissingConstant = true', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, {USER}!',
            props: {},
            showMissingConstant: true,
        });
        expect(result).toBe('Hello, {USER}!');
    });

    it('возвращает массив элементов ReactNode при наличии совпадающих переменных', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, {USER}!',
            props: { user: 'John' },
        });
        expect(result).toEqual('Hello, John!');
    });

    it('обрабатывает ситуацию, когда переменная является константой', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, {TK_CONSTANT}!',
            props: { tk_constant: 'Value' },
        });
        expect(result).toBe('Hello, Value!');
    });

    it('возвращает исходную строку, если нет props', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, {USER}!',
        });
        expect(result).toBe('Hello, {USER}!');
    });

    it('заменяет переменные в строке, если они присутствуют в props и игнорирует лишние', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: 'Hello, {USER}!',
            props: { extra: 'Extra', user: 'John' },
        });
        expect(result).toBe('Hello, John!');
    });

    it('заменяет переменные в строке c ссылкой', () => {
        const result = substituteVariables({
            constant: 'CONSTANT',
            prevResult: '[Пари № {BARCODE}](/tracking/{BARCODE}) успешно',
            props: { barcode: '214' },
        });

        expect(result).toBe('[Пари № 214](/tracking/214) успешно');
    });
});
