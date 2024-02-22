export const getPublicURL = (value: string): string => `${String(process.env.BASE_URL)}${value}`;
