import React from 'react'

function ExerciseCard({exercise}) {
  return (
      <div 
          key={exercise.id}
          name={exercise.name}
          className='exercise_card'>
          <img src={exercise.gifUrl} alt={exercise.name} />   
          <h3>{exercise.name}</h3>
          <div className='exercise_attribute'>
              <p>{exercise.target}</p>
              <p>{exercise.equipment}</p>
              <p>{exercise.bodyPart}</p>
          </div>
     </div>
  )
}

export default ExerciseCard
