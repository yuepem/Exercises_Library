import React, { useState} from 'react';
import './Search.css';

// import { apiOptions, fetchData } from '../../apiRequest/FetchData';

const bodyPartsDATA = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist"
]

const exerciseDATA =[ {
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/2333.gif',
  id: '2333',
  name: 'arm slingers hanging straight legs',
  target: 'abs'
},
{
  bodyPart: 'upper legs',
  equipment: 'body weight',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/3214.gif',
  id: '3214',
  name: 'arms apart circular toe touch (male)',
  target: 'glutes'
},
{
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
  id: '0001',
  name: '3/4 sit-up',
  target: 'abs'
},
{
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
  id: '0002',
  name: '45° side bend',
  target: 'abs'
},
{
  bodyPart: 'waist',
  equipment: 'body weight',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif',
  id: '0003',
  name: 'air bike',
  target: 'abs'
},
{
  bodyPart: 'back',
  equipment: 'leverage machine',
  gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0015.gif',
  id: '0015',
  name: 'assisted parallel close grip pull-up',
  target: 'lats'
}]


function Search( { setExercises, setBodyPart } ) {

  const [search, setSearch] = useState('');
  // const [bodyParts, setBodyParts] = useState(['all']);

  // const bodyParts_url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  // const exercises_url = `https://exercisedb.p.rapidapi.com/exercises`;

  // useEffect(() => {
  //   const fetchBodyPartsDB = async () => {
  //     const bodyPartsDB = await fetchData(bodyParts_url, apiOptions);
  //     console.log(bodyPartsDB)

  //     setBodyParts(bodyPartsDB);
  //   }

  //   fetchBodyPartsDB();
  // }, [])

  // const handleSearch = async () => {
  //   if (search) {
  //     const exerciseDB = await fetchData(exercises_url, apiOptions);

  //     const targetExercises = exerciseDB.filter(
  //       (exercise) => 
  //         exercise.name.toLocaleLowerCase().includes(search)
  //         || exercise.target.toLocaleLowerCase().includes(search)
  //         || exercise.equipment.toLocaleLowerCase().includes(search)
  //         || exercise.bodyPart.toLocaleLowerCase().includes(search)
  //         );
        
  //     setSearch('');
  //     setExercises(targetExercises);
  //   };
  // }


  const handleSearch = () => {
    
    if (search) {
      const searchedExercises = exerciseDATA.filter((exercise) => exercise.bodyPart.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      // console.log(searchedExercises);
    }
    }
  

  return (
    <div className='search'>
      <div className='search_bar'>
        <input 
          type='text'
          placeholder='Search: exercises, body-parts, or equipments'
          value={search}
          onChange = {(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
        <button className='search_button' onClick={handleSearch} >Search</button>
      </div>
      <div className='bodyParts_categories'>
        {bodyPartsDATA.map((item) => (
          <li key={item} className='bodyParts' onClick={(e) => setBodyPart()} >{item}</li>
        )
        )}
      </div>
    </div>
  )
}

export default Search
