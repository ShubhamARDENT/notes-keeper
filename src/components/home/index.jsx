import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "50vh",
        }}
      >
        <Typography variant="p" sx={{ fontSize: "4rem" }}>
          Welcome to Notes keeper
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Button sx={{ background: "purple", marginRight: "10px" }}>
            <Link to="/todolistapp" style={{ color: "white" }}>
              To do list
            </Link>
          </Button>
          <Button sx={{ background: "purple" }}>
            <Link to="/stickynotes" style={{ color: "white" }}>
              Sticky notes
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
