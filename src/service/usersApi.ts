import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
  }),
  endpoints: (build) => ({
    getListUsers: build.query<ListResponse<User>, number | void>({
      query: (page = 1) => ({
        url: `/users?page=${page}`,
      }),
    }),
  }),
});

export const { useGetListUsersQuery } = usersApi;
