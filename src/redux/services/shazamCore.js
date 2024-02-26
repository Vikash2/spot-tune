import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 'e565c7e2d5mshc2df65c895f70c7p1adea8jsnba1f8b27bf59'
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '40308883d2mshd072348babb2053p1de573jsn8489c70e8809');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getRecommendations: builder.query({ query: () => 'charts/track?locale=en-US&pageSize=20&startFrom=0' }),
        getSongDetail: builder.query({ query: ({ songid }) => `songs/get-details?key=${songid}&locale=en-IN` }),
        getTopTracks: builder.query({ query: () => `charts/track?locale=en-US&pageSize=20&startFrom=0` }),
        getSongRelated: builder.query({ query: ({ songid }) => `songs/list-recommendations?key=${songid}&locale=en-IN` }),
        getArtistDetails: builder.query({ query: (artistId) => `artists/get-details?id=${artistId}&l=en-IN` }),
        getArtistsTopSong: builder.query({ query: (artistId) => `artists/get-top-songs?id=${artistId}&l=en-IN` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `search?term=${searchTerm}&locale=en-IN&offset=0&limit=5` })
    })
});

export const {
    useGetRecommendationsQuery,
    useGetSongDetailQuery,
    useGetTopTracksQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsBySearchQuery,
    useGetArtistsTopSongQuery
} = shazamCoreApi;