import type { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { parseStringWithLinks } from '../lib/parse-string-with-links';

vi.mock('@tanstack/react-router', () => ({
    Link: ({ children, to, target, ...props }: { children: ReactNode; to: string; target?: string }) => (
        <a
            href={to}
            target={target}
            {...props}
        >
            {children}
        </a>
    ),
}));

describe('parseStringWithLinks', () => {
    it('возвращает исходную строку, если совпадений не найдено', () => {
        const input = 'Just a regular string without links';
        const result = parseStringWithLinks(input);
        expect(result).toBe(input);
    });

    it('обрабатывает строку с одной ссылкой', () => {
        const input = 'Click [here](https://example.com)';
        const result = parseStringWithLinks(input);
        expect(result).not.toBe(input);

        const { getByText } = render(<div>{result}</div>);

        const linkElement = getByText('here');

        expect(linkElement).toBeInTheDocument();
        expect(linkElement?.nodeName).toBe('A');
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    });

    it('обрабатывает строку с несколькими ссылками', () => {
        const input = 'First [Here](https://first.com) and then [Here](https://second.com)';
        const result = parseStringWithLinks(input);

        const { getAllByText } = render(<div>{result}</div>);

        const links = getAllByText('Here');

        expect(links.length).toBe(2);

        expect(links[0].nodeName).toBe('A');
        expect(links[0]).toHaveAttribute('href', 'https://first.com');
        expect(links[0]?.textContent).toBe('Here');

        expect(links[1].nodeName).toBe('A');
        expect(links[1]).toHaveAttribute('href', 'https://second.com');
        expect(links[1]?.textContent).toBe('Here');
    });

    it('обрабатывает ссылки с атрибутами', () => {
        const input = 'Click [here](https://example.com|target=_blank)';
        const result = parseStringWithLinks(input);
        expect(result).not.toBe(input);

        const { getByText } = render(<div>{result}</div>);

        const linkElement = getByText('here');

        expect(linkElement).toBeInTheDocument();
        expect(linkElement?.nodeName).toBe('A');
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
        expect(linkElement).toHaveAttribute('target', '_blank');
    });

    it('обрабатывает несколько ссылок с разными атрибутами', () => {
        const input =
            'First [link](https://first.com|target=_blank) and second [link](https://second.com|rel=nofollow) and example [link](https://example.com)';
        const result = parseStringWithLinks(input);

        const { getAllByText } = render(<div>{result}</div>);

        const links = getAllByText('link');

        expect(links.length).toBe(3);

        expect(links[0].nodeName).toBe('A');
        expect(links[0]).toHaveAttribute('href', 'https://first.com');
        expect(links[0]).toHaveAttribute('target', '_blank');

        expect(links[1].nodeName).toBe('A');
        expect(links[1]).toHaveAttribute('href', 'https://second.com');
        expect(links[1]).toHaveAttribute('rel', 'nofollow');

        expect(links[2].nodeName).toBe('A');
        expect(links[2]).toHaveAttribute('href', 'https://example.com');
    });

    it('возвращает исходную строку, если совпадение не полное', () => {
        const input = '[here](https://example.com';
        const result = parseStringWithLinks(input);
        expect(result).toBe(input);
    });

    it('корректно обрабатывает вложенный парсинг', () => {
        const input = 'Click [here](https://example.com) and then [there](https://example2.com)';
        const result = parseStringWithLinks(input);
        expect(result).not.toBe(input);

        const { getByText } = render(<div>{result}</div>);

        const linkHere = getByText('here');
        const linkThere = getByText('there');

        expect(linkHere).toBeInTheDocument();
        expect(linkHere?.nodeName).toBe('A');
        expect(linkHere).toHaveAttribute('href', 'https://example.com');

        expect(linkThere).toBeInTheDocument();
        expect(linkThere?.nodeName).toBe('A');
        expect(linkThere).toHaveAttribute('href', 'https://example2.com');
    });

    it('обрабатывает строку без атрибутов', () => {
        const input = 'Click [here](https://example.com)';
        const result = parseStringWithLinks(input);

        const { getByText } = render(<div>{result}</div>);

        const linkElement = getByText('here');

        expect(linkElement).toBeInTheDocument();
        expect(linkElement?.nodeName).toBe('A');
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    });
});
