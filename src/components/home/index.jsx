import { Box, ListItem, Typography, List } from "@mui/material";
// import { Link } from "react-router";
import notesIcon from "../../assets/notesIcon.svg";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
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
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="span" sx={{ fontSize: "5rem", fontWeight: 600 }}>
          The Future of Notes
          <Typography variant="span" sx={{ color: "#2d8eff" }}>
            .
          </Typography>
        </Typography>
        <Typography variant="p" sx={{ fontSize: "1.8rem" }}>
          write,organize and share information collaboratively
        </Typography>
        <img src={notesIcon} style={{ height: "300px" }} />
        {/* buttons */}
        <Box
          sx={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2);",
            width: "66%",
            borderRadius: "10px",
            paddingX: "20px",
          }}
        >
          <List sx={{ display: "flex" }}>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <VerifiedUserRoundedIcon
                sx={{ fontSize: "3rem", color: "#2d8eff" }}
              />
              <Typography
                variant="p"
                sx={{ fontSize: "1.2rem", marginTop: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <GroupRoundedIcon sx={{ fontSize: "3rem", color: "#2d8eff" }} />
              <Typography
                variant="p"
                sx={{ fontSize: "1.2rem", marginTop: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <VerifiedUserRoundedIcon
                sx={{ fontSize: "3rem", color: "#2d8eff" }}
              />
              <Typography
                variant="p"
                sx={{ fontSize: "1.2rem", marginTop: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <VerifiedUserRoundedIcon
                sx={{ fontSize: "3rem", color: "#2d8eff" }}
              />
              <Typography
                variant="p"
                sx={{ fontSize: "1.2rem", marginTop: "20px" }}
              >
                Lorem ipsum dolor, sit amet consectetur
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Home;
