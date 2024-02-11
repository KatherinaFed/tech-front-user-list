import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
  }),
  // tagTypes: ['Users'],
  endpoints: (builder) => ({
    // register: builder.mutation({
    //   query: (data: { email: string; password: string }) => ({
    //     url: '/register',
    //     method: 'POST',
    //     body: {
    //       email: data.email,
    //       password: data.password,
    //     },
    //   }),
    // }),
    login: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: '/login',
        method: 'POST',
        body: {
          email: data.email,
          password: data.password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
