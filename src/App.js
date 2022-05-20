
import "./Assets/Styles/App.css"
import Card from './Components/Card';
import React, { useEffect, useState } from 'react';





function App() {

  const [movies, setMovies] = useState("");


  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json.results);
        setMovies(json.results);
        const re = json.results;
        console.log(re);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {movies && movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
export default App;



