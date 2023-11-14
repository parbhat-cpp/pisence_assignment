import AttendanceCard from "./AttendanceCard";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { data } from "../data";

const AttendanceWrapper = styled(Box)({
  background: "#d9d9d9",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "7px",
});

const Attendance = () => {
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    setAttendance(data.ATTENDANCE);
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "12px 0",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">ATTENDANCE</Typography>
        <AttendanceWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography></Typography>
            <Typography></Typography>
            <Typography>FN</Typography>
            <Typography>AN</Typography>
          </div>
          {Object.entries(attendance).map(([key, value]) => (
            <div key={key}>
              <AttendanceCard
                day={key}
                date={value.date}
                fn={value.fn}
                an={value.an}
              />
            </div>
          ))}
        </AttendanceWrapper>
      </Box>
    </>
  );
};

export default Attendance;
