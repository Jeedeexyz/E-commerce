import { useState } from "react";
import PropTypes from "prop-types"
export const Playlist = (props) => {
  const [plalylistName,setPlaylistName] = useState("")

   

    const handlePlaylistChange =(e)=>{ //handles the change in the playlist name.
setPlaylistName(e.target.value);
  }


  return (
    <>
       <form className="font-mono">
<input onChange={handlePlaylistChange} value={plalylistName} placeholder="Add Playlist Name" type="text" className="bg-purple-800 w-full placeholder-gray-200 border-b-4 border-gray-600 font-bold font-mono px-3 h-10" />
  <ul className="pl-2 font-mono">
  {props.playlistTracks && props.playlistTracks.length > 0 ?  (
    props.playlistTracks.map((track) => (
      <li  key={track.data.id}  >
        <p className="flex justify-between">
         <img className="w-24 h-24 " src={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name} />
        <button className="w-8 font-bold bg-purple-600" onClick={()=>props.handleRemove(track)}>
          -
        </button>
      
    </p>
        <p className="text-lg font-bold pb-2 ">{track.data.name}</p>
         
         
        <p className="text-zinc-400">
        <span>{track.data.artists.items.map((artist) => artist.profile.name).join(', ')} </span> 
  <span>|</span> <span>{track.data.albumOfTrack.name}</span>
   
   </p>
   <hr className="pb-4" />
      </li>
    
    
    ))
  )
   : (
  <p className='text-center mt-20'>No tracks in the playlist</p>

  )}
    </ul>
 </form>  
    </>
  )
}


Playlist.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  playlistTracks: PropTypes.array.isRequired,
};


export default Playlist
