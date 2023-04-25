import React, { useState } from 'react';

import Search from "../components/search/Search"
import Result from '../components/result/Result';
import { EXERCISEDATA } from '../components/Data/exerciseData';

const exerciseDATA = EXERCISEDATA;

function Home() {

    const [exercises, setExercises] = useState(exerciseDATA);
    
    return (
        <div className='homePage'>
            <Search setExercises={setExercises}  />
            <Result searchedExercises={exercises} setExercises={setExercises} />
        </div>
    )
}

export default Home


