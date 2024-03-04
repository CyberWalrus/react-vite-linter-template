import type { DefaultBodyType, PathParams } from 'msw';
import { http, HttpResponse } from 'msw';

const allPosts = new Map<string, DefaultBodyType>();

export const handlers = [
    http.post<PathParams, { id: string }>('/posts', async ({ request }) => {
        // Read the intercepted request body as JSON.
        const newPost = await request.json();

        // Push the new post to the map of all posts.
        allPosts.set(newPost?.id, newPost);

        // Don't forget to declare a semantic "201 Created"
        // response and send back the newly created post!
        return HttpResponse.json(newPost, { status: 201 });
    }),
    http.get('/posts', () => HttpResponse.json('hello', { status: 201 })),
];
