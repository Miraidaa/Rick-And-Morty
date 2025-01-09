import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/styles/Home.css';
import { toast } from 'react-toastify';
import CharacterTable from '../components/CharacterTable';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [inputCharacter, setInputCharacter] = useState('');
  const [page, setPage] = useState(1);
  const [isThereMoreData, setIsThereMoreData] = useState(true); 
  const [isDataFound, setIsDataFound] = useState(true); 

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}&name=${inputCharacter}`)
      .then((response) => {
        setCharacters(response.data.results);
        setIsThereMoreData(response.data.results.length > 0);
        setIsDataFound(response.data.results.length > 0);
      })
      .catch((error) => {
        toast.error('Error fetching data!');
        setIsThereMoreData(false);
        setCharacters([]);
        setIsDataFound(false);
      });
  }, [page, inputCharacter]);

  return (
    <div>
      <ToastContainer />
      <h1>Rick and Morty Characters</h1>
      <input
        type="text"
        value={inputCharacter}
        placeholder="Search character"
        onChange={(e) => setInputCharacter(e.target.value)}
      />
      {isDataFound ? (
        <CharacterTable characters={characters} />
      ) : (
        <p id="notFound">Ooops! Sorry, try another name?</p> 
      )}
      <div className="button-container">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!isThereMoreData}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
