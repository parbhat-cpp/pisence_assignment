import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import Person2Icon from "@mui/icons-material/Person2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const CustomAppBar = styled(AppBar)({
  background: "#606c5d",
  boxShadow: "none",
});

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  padding: "0 15px",
  justifyContent: "space-between",
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const redirect = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar position="static">
        <CustomToolbar>
          <IconButton onClick={() => setOpen(true)}>
            <NotesIcon />
          </IconButton>
          <IconButton>
            <Person2Icon />
          </IconButton>
        </CustomToolbar>
      </CustomAppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(!open)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "45vh",
            "&>ul": {
              display: "flex",
              width: "85%",
              cursor: "pointer",
              margin: "25px auto",
            },
          }}
        >
          <List onClick={() => redirect("/")}>
            <HomeIcon /> <Typography>Summary Dashboard</Typography>
          </List>
          <List onClick={() => redirect("/attendance-tracking")}>
            <TrackChangesIcon /> <Typography>Attendance tracking</Typography>
          </List>
          <List onClick={() => redirect("/behavioral-analytics")}>
            <LeaderboardIcon /> <Typography>Behavioral Analytics</Typography>
          </List>
          <List onClick={() => redirect("/academic-performance")}>
            <AutoStoriesIcon />
            <Typography>Academic Performance Tracking</Typography>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
