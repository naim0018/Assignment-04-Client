// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' })


export const baseApi= createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
