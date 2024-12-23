import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          display: "flex",
          padding: "25px",
          flexDirection: "row",
          gap: "25px",
          alignItems: "center",
        }}
        position="fixed"
      >
        <Link to="/">
          <Typography variant="h6" sx={{ color: "white" }}>
            Notes Keeper
          </Typography>
        </Link>

        <Link to="/todolistapp">
          <Typography
            variant="p"
            sx={{
              fontSize: "1.2rem",
              fontFamily: "sans-serif",
              color: "white",
            }}
          >
            To-do List
          </Typography>
        </Link>
        <Link to="/stickynotes">
          <Typography
            variant="p"
            sx={{
              fontSize: "1.2rem",
              fontFamily: "sans-serif",
              color: "white",
            }}
          >
            Sticky Notes
          </Typography>
        </Link>
      </AppBar>
    </Box>
  );
};

export default Navbar;
