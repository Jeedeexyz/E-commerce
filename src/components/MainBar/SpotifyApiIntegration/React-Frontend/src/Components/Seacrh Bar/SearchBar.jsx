import {  useCallback,useState } from "react"
import axios from "axios"
import Playlist from "../Playlist/Playlist"




export const SearchBar = () => {

  const [query,setQuery] = useState("")
 const [tracks,setTracks] = useState(null)
  const [playlistTracks, setPlaylistTracks] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();

  try {
    // First, send a POST request to save data on the server
    axios.post("http://localhost:3001/api", {
      query
    }).then(() => {
      // console.log("Data from API: ", response.data);

      // After successfully posting data, send a GET request to retrieve it
      axios.get("http://localhost:3001/search").then((getResponse) => {
        // console.log("The Query data is: ", getResponse.data);
        setTracks(getResponse.data)
      }).catch((getError) => {
        console.error("Error retrieving data: ", getError);
      });
    }).catch((postError) => {
      console.error("Error posting data: ", postError);
    });
  } catch (error) {
    console.log("API did not work.");
  }
}

  const handleQueryChange =(e)=>{ //handle the cnage in the search bar.
setQuery(e.target.value);
  }

 

const handleAdd = (track) => {
    if (!playlistTracks.some((playlistTrack) => playlistTrack.data.id === track.data.id)) {
      setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
    }
  };


   const handleRemove = useCallback((track) => { //this handle remove button
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack !== track)
    );
  }, []);

  // const handleSavingPlaylist = async () => {
  //   // const accessToken = localStorage.getItem("Token");
  //   try {
  //     const response = await axios
  //       .post("http://localhost:5173/createPlaylist", {
  //         accessToken: accessToken,
  //         name: playlistName,
  //         trackUris: trackUri,
  //       })
  //       .then(() => {
  //         window.alert(
  //           "your PlayList is saves to Your Spotify account successfully"
  //         );
  //       });

  //     if (response.status === 200) {
  //       console.log("Playlist created successfully");
  //     } else {
  //       console.error("Failed to create playlist or add tracks");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };


  let Data = tracks; // storing Api data in this.

  return (
     <>
    <div className='mt-0 w-full '>
      <form onSubmit={handleSubmit}  className='pt-12 flex flex-col gap-10 items-center'>
        <input onChange={handleQueryChange} value ={query} type="text" placeholder="Search Songs..." className='bg-zinc-200 h-10 p-5 rounded-2xl border-2 border-solid w-31 hover:border-fuchsia-800
        active:border-fuchsia-800' />
    <button  type="submit" className='text-lg font-mono text-white bg-fuchsia-700 rounded-3xl h-9  w-24 hover:bg-fuchsia-900 hover:w-28 hover:text-xl  ease-in-out hover:transition-all '>Find 🔎</button>
    </form>
    </div>

    {/* this is the result box*/ }
    <div className='flex relative mt-4 justify-between '>
  <div className=' bg-purple-800 w-96  h-96 overflow-y-auto  ml-10'> 
    <h3 className="text-xl text-center font-bold pb-5 font-mono">Results:</h3>
    
<ul className="pl-2 font-mono">
  {Data && Data.tracks && Data.tracks.items ? (
    Data.tracks.items.map((track) => (
      <li  key={track.data.id}  >
        <p className="flex justify-between">
         <img className="w-24 h-24 " src={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name} />
   {/* <button className="w-8 font-bold bg-purple-600">+</button> */}
        <button className="w-8 font-bold bg-purple-600" onClick={()=>handleAdd(track)}>
          +
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
  ) : (
    <p className="text-center mt-20">No data available</p>
  )}
</ul>


  </div>


  {/*This is the palylist section */}
  <div className=" bg-purple-800 w-96  h-96 overflow-y-auto  mr-10">

   <Playlist handleRemove={handleRemove} playlistTracks={playlistTracks} />
 </div>

</div>
<div className="flex justify-center">
  <button  className="text-zinc-900 bg-purple-600 rounded-3xl  w-36 h-12 font-mono font-bold hover:text-md ease-in-out hover:transition-all hover:bg-fuchsia-500">Add to Spotify </button>
</div>
 </>
    )
}




export default SearchBar
