import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com?apikey=3e2054a8";


const App = ()=>{

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const searchMovies = async (searchTitle) =>{
    const response = await fetch(`${API_URL}&s=${searchTitle}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(movies)

  }
  useEffect(()=>{
    searchMovies("Batman")

  },[])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={()=>{ searchMovies(searchTerm)}}></img>
      </div>
      
        {movies.length > 0 ? (
            <div className='container'>
            {movies.map((movie) => (
                <MovieCard movie={movie}></MovieCard>
              ))}
              </div>
          ) :(
          <h1 className="empty">No data found</h1>
          )
        }
      </div>
      
   
    
  );
}

export default App;
