import React from "react";
import { Box, Typography } from "@mui/material";
import { BodyPart } from "..//imports";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
  return (
    <Box className='scrollX-BodyPart'>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          className='MobSxrollX'>
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollbar;
