import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Result from './components/result/Result';
import "./App.css";

function App() {

  const [exercises, setExercises] = useState([]);
  const [bodyPartExercises, setBodyPartExercises] = useState([]);

  return (
    <div className='app'>
      <Navbar />
      <Search setExercises={setExercises} setBodyPartExercises={setBodyPartExercises} />
      <Result searchedExercises={exercises} bodyPartExercises={bodyPartExercises} />
    </div>
  )
}

export default App
