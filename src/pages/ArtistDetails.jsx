import React, { Suspense } from "react";

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'


import { useGetArtistDetailsQuery, useGetArtistsTopSongQuery } from '../redux/services/shazamCore'

// const RelatedSongs = React.lazy(() => import('../components'));

const ArtistDetails = () => {
  const { id: artistId } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artistId);

  const { data: artistSongData, isFetching: isArtistSongDataFetching } = useGetArtistsTopSongQuery(artistId);

  if (isFetching && isArtistSongDataFetching) return <Loader title="Loading the artist details..." />

  if (error) <Error />


  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0].attributes} />
      {artistSongData && <RelatedSongs data={Object.values(artistSongData?.data)} isPlaying={isPlaying} activeSong={activeSong} artistId={artistId} />}

    </div>
  )


}

export default ArtistDetails;
