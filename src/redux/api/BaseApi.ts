// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' })


export const baseApi= createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { } = baseApi