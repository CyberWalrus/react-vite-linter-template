const cookieStorage: Record<string, string> = {};

const cookieMock = {
    get: vi.fn((key: string) => cookieStorage[key] || null),
    remove: vi.fn((key: string) => {
        delete cookieStorage[key];
    }),
    set: vi.fn((key: string, value: string) => {
        cookieStorage[key] = value;
    }),
};

export default cookieMock;
