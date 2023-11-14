import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Attendance from "../components/Attendance";
import Homework from "../components/Homework";
import BehavioralAnalytics from "../components/BehavioralAnalytics";

const Container = styled(Box)({
  width: "100%",
  height: "100vh",
});

const ContentWrapper = styled(Box)({
  margin: "15px 0 15px 0",
  background: "#f8f1f1",
  padding: "35px",
});

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      await fetch("src/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setName(data.NAME);
        });
    })();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <ContentWrapper>
          <Typography variant="h6">HELLO! {name}</Typography>
          <Attendance />
          <Box
            sx={{
              padding: "12px 0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Homework />
            <BehavioralAnalytics />
          </Box>
        </ContentWrapper>
      </Container>
    </>
  );
}

export default Home;
