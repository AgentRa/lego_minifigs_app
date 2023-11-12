import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { IMinifig, ISet, ServerResponse } from '@/app/store/lego/models.ts';

const legoApi = createApi({
  reducerPath: 'lego/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rebrickable.com/api/v3/lego/',
    prepareHeaders: (headers) => {
      const apiKey = '715163f6eb9b5291b7dcb0909fca0e2d';
      headers.set('Authorization', `key ${apiKey}`);
      return headers;
    },
  }),

  endpoints: (build) => ({
    getMinifigSet: build.query<ISet[], string>({
      query: (set_num: string) =>  `minifigs/${set_num}/parts/`,
      transformResponse: (response: ServerResponse<ISet>) => response.results,
    }),
    getMinifigRandom: build.query<IMinifig, Array<number>>({
      async queryFn(numbers, __, ___, fetchWithBQ) {
        const promises = numbers.map((number) =>
          fetchWithBQ({
            url: `minifigs/`,
            params: {
              page: number,
              page_size: 1,
              in_theme_id: 246,
            },
          }),
        );
        const results = await Promise.all(promises);
        const data = results.map((result) =>
          result.data ? { data: result.data.results[0] as IMinifig[] } : { error: result.error as FetchBaseQueryError },
        );
        return { data };
      },
    }),
  }),
});

// Auto-generated hooks
export const { useLazyGetMinifigRandomQuery, useGetMinifigSetQuery } = legoApi;

// Possible exports
export const { endpoints, reducerPath, reducer: apiReducer, middleware } = legoApi;
// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.getPosts.initiate(), endpoints.getPosts.select(), endpoints.getPosts.useQuery()
// endpoints.addPost.initiate(), endpoints.addPost.select(), endpoints.addPost.useMutation()
// see `createApi` overview for _all exports_
