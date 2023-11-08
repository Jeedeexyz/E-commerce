
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SearchBar from './Components/Seacrh Bar/SearchBar'
import axios from "axios"


function App() {

 const handleLogin = async () => {
    try {
      await axios.get("/login").then((response) => {
        const authorizationUri = response.data.data;
        window.location.href = authorizationUri; // Redirect to Spotify for authorization
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" relative flex justify-center items-center bg-purple-950 text-white text-center font-mono">
     <Header />  {/*This is our top branding */}
       <button onSubmit={handleLogin} className="absolute right-3 bg-purple-800 rounded-3xl p-3 text-md hover:bg-purple-500 hover:transition-all">Login With Spotify</button>
    </div>

    <div className='relative top-0 bg-[url("./assets/Images/Background.jpeg")] bg-cover h-screen w-full '>

  <SearchBar />{/* This is Search bar and Search button */}

<div className='absolute bottom-0 w-full text-white bg-purple-800 text-center'>
  <Footer />
</div>

    </div>
    </>
  )
}

export default App
