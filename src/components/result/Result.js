import React, {useState} from 'react';
import Pagination from "@mui/material/Pagination";
import ExerciseCard from './exerciseCard';
import './Result.css';

function Result({ searchedExercises, setExercises }) {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = searchedExercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const handlePageChange = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top: 200, behavior: "smooth"})
  }

  return (
    <div className='searchResults'>
      <h1>{searchedExercises.length} Results</h1>
      <div className='exercisesList'>
        {currentExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} setExercises={setExercises}/>
          ))
        }
      </div>
      <div className='pageNavigation'>
          {
            searchedExercises.length > exercisesPerPage && (
              <Pagination 
                color="standard"
                shape="rounded"
                
                defaultPage={1}
                count={Math.ceil(searchedExercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                size='large'
                // showFirstButton
                // showLastButton
                
              />
            )
          }
      </div>
    </div>
  )
}

export default Result
