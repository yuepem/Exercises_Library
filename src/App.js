import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Result from './components/result/Result';
import { EXERCISEDATA } from './components/Data/exerciseData';

import "./App.css";

function App() {

  const exerciseDATA = EXERCISEDATA;

  const [exercises, setExercises] = useState(exerciseDATA);
  // const [bodyPartExercises, setBodyPartExercises] = useState([]);

  return (
    <div className='app'>
      <Navbar />
      <Search setExercises={setExercises}  />
      <Result searchedExercises={exercises} setExercises={setExercises}/>
    </div>
  )
}

export default App
