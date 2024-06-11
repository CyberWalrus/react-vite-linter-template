import { delay, http, HttpResponse } from 'msw';

import result from '../mocks/get-resources.json';

export const getResources = http.get(`/rest/resources`, async () => {
    await delay();

    return HttpResponse.json({
        result,
    });
});
