export const getPublicURL = (value: string): string => `${String(process.env.VITE_BASE_URL)}${value}`;
