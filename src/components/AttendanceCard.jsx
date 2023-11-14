import { Box, Typography } from "@mui/material";
import { capitalStr } from "../util";

const AttendanceCard = ({ day, date, fn, an }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">{capitalStr(day)}</Typography>
        <Typography>{date}</Typography>
        <Box
          sx={{
            height: "50px",
            width: "50px",
            marginBottom: "10px",
            background: fn === "present" ? "#09a218" : "#9f0000",
          }}
        ></Box>
        <Box
          sx={{
            height: "50px",
            width: "50px",
            marginBottom: "10px",
            background: an === "present" ? "#09a218" : "#9f0000",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default AttendanceCard;
