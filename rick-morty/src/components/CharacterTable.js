import React from 'react';
import './CharacterTable.css';
import { Link } from 'react-router-dom';

function CharacterTable({ characters }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.id}>
            <td>
              <img src={character.image} alt={character.name} width="50" />
            </td>
            <td>
              <Link to={`/profile/${character.id}`}>{character.name}</Link>
            </td>
            <td>{character.species}</td>
            <td>{character.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CharacterTable;
