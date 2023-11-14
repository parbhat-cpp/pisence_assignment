import { Box, Typography } from "@mui/material";
import { capitalStr } from "../util";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { data } from "../data";

const HomeworkContainer = styled(Box)({
  textAlign: "center",
  background: "#d9d9d9",
  flex: "0.5",
  marginRight: "14px",
  padding: "12px",
});

const Homework = () => {
  const [homework, setHomework] = useState([]);

  useEffect(() => {
    setHomework(data.homework);
  }, []);

  return (
    <>
      <HomeworkContainer>
        <Typography fontSize={24}>Homeworks</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            textAlign: "center",
          }}
        >
          {homework.map((e, i) => (
            <Typography key={i} fontSize={24}>
              {capitalStr(e)}
            </Typography>
          ))}
        </Box>
      </HomeworkContainer>
    </>
  );
};

export default Homework;
