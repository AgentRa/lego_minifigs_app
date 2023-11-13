import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMinifig, IPart, ISet, ServerResponse } from '@/shared/models.ts';


const simpleBaseQuery = fetchBaseQuery({
    baseUrl: 'https://rebrickable.com/api/v3/lego/',
    prepareHeaders: (headers) => {
      const apiKey = '715163f6eb9b5291b7dcb0909fca0e2d';
      headers.set('Authorization', `key ${apiKey}`);
      return headers;
    },
  });


const legoApi = createApi({
  reducerPath: 'lego/api',
  baseQuery: simpleBaseQuery,

  endpoints: (build) => ({

    getMinifigSet: build.query<IPart[], string>({
      query: (set_num: string) =>  `minifigs/${set_num}/parts/`,
      transformResponse: (response: ServerResponse<ISet>) => response.results.map(res => res.part),
    }),

    getMinifigRandom: build.query({
      queryFn: async function(arg, _, __, fetchWithBQ) {
        const promises = arg.map((number: number) =>
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
        const data = results.map((result) => {

            if (result.error) return { error: result.error };
            const data = result.data as ServerResponse<IMinifig>;
            return data.results[0];
          },
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
