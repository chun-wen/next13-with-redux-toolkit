// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const weatherApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'weatherApi',
  // All of our requests will have URLs starting with '/'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://weatherapi-com.p.rapidapi.com' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getWeather` endpoint is a "query" operation that returns data
    getWeather: builder.query({
      query: ({ parameter }) => ({
        url: `current.json?q=${parameter}`,
        headers: {
          'X-RapidAPI-Key': 'fcf4d34e7emsh35a1394bc93d9b7p153f44jsn1eaf902a2ece',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getWeather` query endpoint
export const { useGetWeatherQuery } = weatherApi;
