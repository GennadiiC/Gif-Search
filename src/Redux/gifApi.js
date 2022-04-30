import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gifApi = createApi({
  reducerPath: 'gifApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.giphy.com/v1/gifs/' }),
  endpoints: (builder) => ({
    getGifByName: builder.query({
      query: (name) => `search?q=${name}&limit=24&api_key=WLUInA16EcV69jVkNKxjzcqIhFD4z869`
    })
  })
});

export const { useGetGifByNameQuery } = gifApi