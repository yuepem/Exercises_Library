import React, { useState} from 'react';
import './Search.css';

// import { apiOptions, fetchData } from '../../apiRequest/FetchData';

import { EXERCISEDATA } from "../Data/exerciseData";
import { BODYPARTSDATA } from "../Data/bodyPartsData";

const bodyPartsDATA = BODYPARTSDATA;
const exerciseDATA = EXERCISEDATA;


function Search( { setExercises, setBodyPart } ) {

  const [search, setSearch] = useState('');
  // const [bodyParts, setBodyParts] = useState(['all']);

  


  const handleSearch = () => {
    
    if (search) {
      const searchedExercises = exerciseDATA.filter((exercise) => exercise.bodyPart.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      // console.log(searchedExercises);
    }
    }
  

  return (
    <div className='search'>
      <div className='search_bar'>
        <input 
          type='text'
          placeholder='Search: exercises, body-parts, or equipments'
          value={search}
          onChange = {(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        <button className='search_button' onClick={handleSearch} >Search</button>
      </div>
      <div className='bodyParts_categories'>
        {bodyPartsDATA.map((item) => (
          <li key={item} className='bodyParts' onClick={() => setBodyPart(item)} >{item}</li>
        )
        )}
      </div>
    </div>
  )
}

export default Search
