import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useEffect } from "react";

let count = {};

const BehavioralContainer = styled(Box)({
  flex: "0.5",
  background: "#d9d9d9",
  marginLeft: "14px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "12px",
});

const BehavioralAnalytics = () => {
  useEffect(() => {
    count = {};
    (async () => {
      await fetch("src/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data["Behavioral Analytics"].forEach((element) => {
            if (count[element]) {
              count[element] += 1;
            } else {
              count[element] = 1;
            }
            console.log(count);
          });
        });
    })();
  }, []);

  return (
    <>
      <BehavioralContainer
        sx={{
          minHeight: "150px",
        }}
      >
        <Typography fontSize={24}>Behavioral Analytics</Typography>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: count["good"], label: "Good" },
                { id: 1, value: count["bad"], label: "Bad" },
              ],
            },
          ]}
        />
      </BehavioralContainer>
    </>
  );
};

export default BehavioralAnalytics;
