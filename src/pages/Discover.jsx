import { Error, Loader, SongCard } from '../components';

import { useSelector } from "react-redux";

import { useGetRecommendationsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const { data, isFetching, error } = useGetRecommendationsQuery();
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    if (isFetching) return <Loader title='Loading songs...' />

    if (error) return <Error />;

    const { tracks } = data;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className='font-bold text-3xl text-white'>Top Recommendations</h2>

            </div>
            <div className="flex flex-wrap justify-center  gap-8 sm:justify-start">
                {tracks?.map((song, i) => {
                    return <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={tracks}
                        i={i}
                    />
                })}
            </div>
        </div>
    )

};

export default Discover;
