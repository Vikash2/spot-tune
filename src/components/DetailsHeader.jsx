import { Link } from 'react-router-dom';


const DetailsHeader = ({ artistId, artistData, songData }) => {

  // const artist = artistData?.artists[artistId].attributes;

  return (
    <div className='relative w-full flex flex-col'>
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          <img alt="art" src={artistId ? artistData?.artwork?.url.replace('{w}', '500').replace('{h}', 500) : songData?.images?.coverart}
            className='sm:w-48 sm:h-48 w-28 h-28 rounded-full object-cover border-2 shadow-xl shadow-black' />
          <div className="ml-5">
            <p className='font-bold text-xl text-white sm:text-3xl'>{artistId ? artistData?.name : songData?.title}</p>
            {
              !artistId && (
                <Link to="{`/artist/${songData?.artists[0]?.adamid}`}">
                  <p className='text-base text-gray-400 mt-2'>{songData?.subtitle}</p>
                </Link>
              )
            }
            <p className='text-base text-gray-400 mt-2'>
              {artistId ? artistData?.genreNames[0] : songData?.genres?.primary}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-24 sm:h-44" />
    </div>
  )
};

export default DetailsHeader;
