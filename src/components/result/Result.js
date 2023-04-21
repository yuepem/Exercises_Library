import React from 'react';
import ExerciseCard from './exerciseCard';
import './Result.css';

function Result({ searchedExercises, setExercises }) {

  return (
    <div className='searchResults'>
      <h1>{searchedExercises.length} Results</h1>
      <div className='exercisesList'>
        {searchedExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} setExercises={setExercises}/>
          ))
        }
      </div>
    </div>
  )
}

export default Result
