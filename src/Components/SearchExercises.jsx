import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { HorizontalScrollbar } from "..//imports";
const SearchExercises = ({ setexercises , bodyPart, setBodyPart }) => {

  
  const [search, setsearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);
  console.log(bodyParts)

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) 
          ||exercise.target.toLowerCase().includes(search) 
          ||exercise.equipment.toLowerCase().includes(search) 
          ||exercise.bodyPart.toLowerCase().includes(search)
      );
      setsearch("");
      setexercises(searchedExercises);
    }
  };
  return (
    <Stack
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'
      >
      <Typography
        fontWeight='700'
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb='50px'
        textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            borderRadius: "40px",
          }}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          value={search}
          type='text'
        />
        <Button
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
          className='search-btn'>
          Search
        </Button>
      </Box>
      <Box
        className='MobSxrollX'
        sx={{
            
          width: {lg:"100%", xs:"110%" },
          
          p: "20px",
        }}>
        <HorizontalScrollbar
          data={bodyParts}
          setBodyParts={setBodyParts}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
