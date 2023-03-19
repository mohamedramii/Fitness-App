import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ExerciseCard } from "../imports";
const Exercises = ({ exercises, setexercises, bodyPart }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexLastExercise = currentPage + exercisesPerPage;
  const indexFirstExercise = indexLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexFirstExercise,
    indexLastExercise
  );

  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     let exerciseData = [];
  //     if (bodyPart === "all") {
  //       exerciseData = await fetchData(
  //         "https://exercisedb.p.rapidapo.com/exercises",
  //         exerciseOptions
  //       );
  //     } else {
  //       exerciseData = await fetchData(
  //         `https://exercisedb.p.rapidapo.com/exercises/bodyPart/${bodyPart}`,
  //         exerciseOptions
  //       );
  //     }
  //     setexercises(exerciseData);
  //   };
  //   fetchExercisesData();
  // }, [bodyPart]);

  return (
    <Box id='exercises' sx={{ mt: { lg: "110px" } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap='wrap'
        justifyContent='center'>
        {currentExercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
