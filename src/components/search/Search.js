import React, { useState } from 'react';
import './Search.css';
import { EXERCISEDATA } from "../Data/exerciseData";
import { BODYPARTSDATA } from "../Data/bodyPartsData";

const bodyPartsDATA = BODYPARTSDATA;
const exerciseDATA = EXERCISEDATA;

function Search({ setExercises }) {

  const [search, setSearch] = useState('');
  
  

  const handleClick = (item) => {
  
    const clickExercises = exerciseDATA.filter((exercise) => exercise.bodyPart.toLowerCase().includes(item))

    setExercises(clickExercises);
    // console.log(clickExercises);
  }

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
          placeholder='Search: exercises, body-part, or equipments'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <button className='search_button' onClick={handleSearch} >Search</button>
      </div>
      <div className='bodyParts_categories'>
        {bodyPartsDATA.map((item) => (
          <button key={item} value={item} className='bodyParts' onClick={() => handleClick(item)} >{item}</button>
        )
        )}
      </div>
    </div>
  )
}

export default Search
