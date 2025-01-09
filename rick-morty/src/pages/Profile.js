import React, { useEffect, useState } from 'react';
import '../pages/styles/Profile.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loadingGif from '../pages/images/loading1.gif'; 
import { ToastContainer, toast } from 'react-toastify'; 

function Profile() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error('Error fetching character. Please try again.');
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingGif} alt="Loading" />
      </div>
    );
  }

  

 
  return (
    <div className="profile-container">
      <h1>{character.name}'s Profile</h1>
      <img src={character.image} alt={character.name} width="200" /> 
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      <button onClick={() => navigate('/')}>Back</button>
      <ToastContainer />
    </div>
  );
}

export default Profile;
