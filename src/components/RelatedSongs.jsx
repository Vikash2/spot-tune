import SongBar from "./SongBar";

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => {

  return (
    <div className="flex flex-col">
      {data && <h1 className="font-bold text-3xl text-white">Related Songs: </h1>}
      <div className="mt-6 w-full flex flex-col">
        {artistId ? data?.map((song, i) => {
          return <SongBar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        }) : data?.tracks?.map((song, i) => {
          return <SongBar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        })}
      </div>

    </div>
  );
}

export default RelatedSongs;
