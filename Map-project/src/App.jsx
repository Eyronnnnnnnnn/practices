import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log("API KEY:", API_KEY);

    async function fetchGames() {
      try {
        const response = await fetch(`https://api.gamebrain.co/games?api_key=${API_KEY}`);
        const data = await response.json();
        console.log("API response:", data);

        setGames(data.results || data || []);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }

    fetchGames();
  }, []);

  return (
    <>
      <div>Welcome to My MAP</div>
      {games.length === 0 ? (
        <p>No games found.</p>
      ) : (
        <ul>
          {games.map((game, index) => (
            <li key={index}>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
