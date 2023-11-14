import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMinifig, IPart, ISet, OrderInfo, ServerResponse } from '@/shared/models.ts';



const simpleBaseQuery = fetchBaseQuery({
    baseUrl: 'https://rebrickable.com/api/v3/lego/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `key ${import.meta.env.VITE_API_KEY}`);
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
              in_theme_id: import.meta.env.VITE_TARGET_THEME_ID,
            },
          }),
        );
        const results = await Promise.all(promises);
        const firstError = results.find((result) => result.error !== undefined);

        if (firstError) {
          return { error: firstError.error, meta: firstError?.meta as unknown };
        }

        return { data: results.map((result) => result.data.results[0] as IMinifig) };
      },
    }),



    submitOrder: build.mutation<unknown, OrderInfo>({
      query: (newMinifig) => ({
        url: `minifigs/`,
        method: 'POST',
        body: newMinifig,
      }),
    }),

  }),
});

// Auto-generated hooks
export const { useLazyGetMinifigRandomQuery, useGetMinifigSetQuery, useSubmitOrderMutation } = legoApi;

// Possible exports
export const { reducerPath, reducer: apiReducer, middleware } = legoApi;
