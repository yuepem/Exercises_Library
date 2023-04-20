import React, { useEffect, useState} from 'react';
import './Search.css';

import { apiOptions, fetchData } from '../../apiRequest/FetchData';


function Search( { setExercises } ) {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState(['arm', 'leg']);

  const bodyParts_url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  const exercises_url = `https://exercisedb.p.rapidapi.com/exercises`;

  useEffect(() => {
    const fetchBodyPartsDB = async () => {
      const bodyPartsDB = await fetchData(bodyParts_url, apiOptions);
      console.log(bodyPartsDB)

      setBodyParts(bodyPartsDB);
    }

    fetchBodyPartsDB();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseDB = await fetchData(exercises_url, apiOptions);

      const targetExercises = exerciseDB.filter(
        (exercise) => 
          exercise.name.toLocaleLowerCase().includes(search)
          || exercise.target.toLocaleLowerCase().includes(search)
          || exercise.equipment.toLocaleLowerCase().includes(search)
          || exercise.bodyPart.toLocaleLowerCase().includes(search)
          );
        
      setSearch('');
      setExercises(targetExercises);
    };
  }

  return (
    <div className='search'>
      <div className='search_bar'>
        <input 
          type='text'
          placeholder='Search: exercises, body-parts, or equipments'
          onChange = {(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        <button className='search_button' onClick={handleSearch}>Search</button>
      </div>
      <div>
        {bodyParts.map((item) => {
            <li>{item}</li>
        })}
      </div>
    </div>
  )
}

export default Search
