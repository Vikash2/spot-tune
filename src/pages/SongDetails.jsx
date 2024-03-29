import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'

import { setActiveSong, playPause } from '../redux/features/playerSlice';

import { useGetSongDetailQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore'

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();

    const { activeSong, isPlaying } = useSelector((state) => state.player)

    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailQuery({ songid });

    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });


    if (isFetchingRelatedSongs || isFetchingSongDetails) return <Loader title="Searching the song details..." />

    if (error) <Error />
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    }

    const handlePauseClick = () => {
        dispatch(playPause(false));
    }

    return (
        <div className='flex flex-col'>
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics :</h2>

                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => <p className='text-gray-400 text-base my-1' key={i}>{line}</p>) : <p className='text-gray-400 text-base my-1'>Sorry. no lyrics found.</p>}
                </div>
            </div>
            <RelatedSongs data={data} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} />
        </div>
    )


}

export default SongDetails;
