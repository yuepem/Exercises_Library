import React from 'react';
import { EXERCISEDATA } from "../Data/exerciseData";

function ExerciseCard({ exercise, setExercises,setCurrentPage }) {

    const exerciseDATA = EXERCISEDATA;
    
    const filterExercises = (filterFn) => {
        const filteredExercises = exerciseDATA.filter(filterFn);
        
        setExercises(filteredExercises);
        setCurrentPage(1);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    }

    const handleTarget = (item) => {
        filterExercises((exercise) => exercise.target.toLowerCase().includes(item))
    };

    const handleEquipment = (item) => {
        filterExercises((exercise) => exercise.equipment.toLowerCase().includes(item))
        
    };

    const handleBodyPart = (item) => {
        filterExercises((exercise) => exercise.bodyPart.toLowerCase().includes(item));
    };


    return (
        <div
            key={exercise.id}
            name={exercise.name}
            className='exercise_card'>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <h3>{exercise.name}</h3>
            <div className='exercise_attribute'>
                <p 
                    key={exercise.target} 
                    onClick={() => handleTarget(exercise.target)} >{exercise.target}
                </p>
                <p 
                    key={exercise.equipment}
                    onClick={() => handleEquipment(exercise.equipment)}>
                    {exercise.equipment}
                </p>
                <p 
                    key={exercise.bodyPart}
                    onClick={() => handleBodyPart(exercise.bodyPart)} >
                    {exercise.bodyPart}
                </p>
            </div>
        </div>
    )
}

export default ExerciseCard
