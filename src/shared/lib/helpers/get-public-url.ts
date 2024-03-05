import { envClient } from '$shared/api/env-client';

export const getPublicURL = (value: string): string => `${String(envClient.VITE_BASE_URL)}${value}`;
