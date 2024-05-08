import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'live_KtOc9AeVmc8g63T4TDlSmdfA0PKFSMXcXsqzSHoNo1jVD2jpma3WA1VTpcTS92X5';

export const catAPI = createApi({
  reducerPath: 'catAPI',
  baseQuery: fetchBaseQuery({ //faz fetch do url de base
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {  //isto é porque precisamos de fazer a autenticação
      headers.set('x-api-key', API_KEY);
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),

  endpoints: (builder) => ({
    fetchCats: builder.query({  //vai usar a base url e vai acrescentar coisas à frente
      query: ({ page = 1, limit = 10 }) => `images/search?limit=${limit}&page=${page}`,
    }),

    submitVote: builder.mutation({  
      query: ({ image_id, sub_id, value }) => ({
        url: 'votes/',
        method: 'POST',
        body: { image_id, sub_id, value },
      }),
    }),

    fetchVotes: builder.query({  
      query: ({ sub_id }) => {
          return `votes?limit=10&order=DESC&sub_id=${sub_id}`;
      },
    }),
  }
  ),
})

export const { useFetchCatsQuery, useSubmitVoteMutation, useFetchVotesQuery } = catAPI; //Ver na documentação que nomes usar

export default catAPI;