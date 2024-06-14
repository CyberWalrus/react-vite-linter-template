import { envClient } from '$shared/core/env-client';

export const getPublicURL = (value: string): string => `${String(envClient.VITE_BASE_URL)}${value}`;
