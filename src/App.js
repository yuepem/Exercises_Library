import React,{ useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import "./App.css";

function App() {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div className='app'>
      <div>
        <Navbar />  
      </div>
      <div>
        <Search setExercises={setExercises}/>
      </div>
      {/* <Result /> */}
    </div>
  )
}

export default App
