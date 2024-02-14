import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

interface UserResponse {
  data: User;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
  }),
  endpoints: (build) => ({
    getListUsers: build.query<ListResponse, number | null>({
      query: (page) => ({
        url: `/users?page=${page}`,
        params: {
          per_page: 4,
        },
      }),
    }),
    getUserById: build.query<UserResponse, string | undefined>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const { useGetListUsersQuery, useGetUserByIdQuery } = usersApi;
