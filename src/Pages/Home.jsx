import React , {useState} from 'react'
import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "./../imports";

const Home = () => {
    const [exercises, setexercises] = useState([]);
    const [bodyPart , setBodypart] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setexercises={setexercises}
        bodyPart={bodyPart}
        setBodypart={setBodypart}
      />
      <Exercises 
        setexercises={setexercises}
        bodyPart={bodyPart}
        exercises={exercises}
         />
    </Box>
  );
}

export default Home