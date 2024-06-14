import ky from 'ky';

export const fetchGetResources = (): Promise<{ result: Record<string, string> }> => ky.get('/rest/resources').json();
