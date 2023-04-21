import React from 'react';
import { EXERCISEDATA } from "../Data/exerciseData";

function ExerciseCard({ exercise, setExercises }) {

    const exerciseDATA = EXERCISEDATA;

    const handleTarget = (item) => {
        const exercise_target = exerciseDATA.filter((exercise) => exercise.target.toLowerCase().includes(item));

        setExercises(exercise_target);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleEquipment = (item) => {
        const exercise_equipment = exerciseDATA.filter((exercise) => exercise.equipment.toLowerCase().includes(item));

        setExercises(exercise_equipment);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleBodyPart = (item) => {
        const exercise_bodyPart = exerciseDATA.filter((exercise) => exercise.bodyPart.toLowerCase().includes(item));

        setExercises(exercise_bodyPart);
        window.scrollTo({ top: 200, behavior: 'smooth' });
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
