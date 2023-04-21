import React from 'react';
import './Result.css';

function Result({searchedExercises, bodyPart}) {
  return (
    <div className='searchResults'>
      <h1>{searchedExercises.length} Results</h1>
      <div className='exercisesList'>
          {searchedExercises.map((exercise) => (
            <div 
                key={exercise.id}
                name={exercise.name}
                className='exercise_card'
            >
    
                <img src={exercise.gifUrl} alt={exercise.name} />   
                <h3>{exercise.name}</h3>
                <div className='exercise_attribute'>
                    <p>{exercise.target}</p>
                    <p>{exercise.equipment}</p>
                    <p>{exercise.bodyPart}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Result
