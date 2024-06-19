import ky from 'ky';

export const fetchGetResources = async (): Promise<Record<string, string>> => {
    const value = await ky.get('/rest/resources').json<{ result: Record<string, string> }>();

    return value.result;
};
