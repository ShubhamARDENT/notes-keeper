import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          display: "flex",
          paddingBlock: "26px",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "white",
          boxShadow: "none",
          color: "black",
        }}
        position="fixed"
      >
        <Link to="/">
          <Typography
            variant="span"
            sx={{
              color: "black",
              fontWeight: 900,
              fontSize: "1.5rem",
              fontStyle: "italic",
            }}
          >
            Notes Keeper
            <Typography variant="span" sx={{ color: "#2d8eff" }}>
              .
            </Typography>
          </Typography>
        </Link>
        {/* links */}
        <Box
          sx={{
            display: "flex",
            columnGap: "50px",
            width: "46%",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          <Link to="/todolistapp">
            <Typography variant="p" sx={{ color: "black" }}>
              To-do List
            </Typography>
          </Link>
          <Link to="/stickynotes">
            <Typography variant="p" sx={{ color: "black" }}>
              Sticky Notes
            </Typography>
          </Link>

          <Typography variant="p" sx={{ color: "black" }}>
            Contact Us
          </Typography>

          <Typography variant="p" sx={{ color: "black" }}>
            Pricing
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
