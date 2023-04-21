import React from 'react';
import ExerciseCard from './exerciseCard';
import './Result.css';

function Result({ searchedExercises, bodyPartExercises }) {
  const exerciseCount = searchedExercises.length || bodyPartExercises.length;

  return (
    <div className='searchResults'>
      <h1>{exerciseCount} Results</h1>
      <div className='exercisesList'>
        {searchedExercises.length > 0 ? 
          (searchedExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
          ) : (bodyPartExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        )
        }
      </div>
    </div>
  )
}

export default Result
