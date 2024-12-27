import { useRouteError } from "react-router";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router";
const Error = () => {
  const error = useRouteError();

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          background: "white",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2);",
          borderRadius: "6px",
        }}
      >
        <Typography variant="p" sx={{ fontSize: "3rem", fontWeight: 900 }}>
          {error.status}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "1.5rem", marginY: "20px" }}>
          {error.error.message}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Link path="/">
            <Button
              sx={{
                background: "#2d8eff",
                padding: "10px",
                color: "white",
                fontWeight: 600,
              }}
            >
              Back to home
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Error;
