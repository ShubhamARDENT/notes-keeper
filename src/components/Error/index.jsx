import { useRouteError } from "react-router";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "#0f1e25",
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
          padding: "20px",
          textAlign: "center",

          borderRadius: "6px",
        }}
      >
        <Typography variant="p" sx={{ fontSize: "3rem", fontWeight: 900 }}>
          {error.status}
        </Typography>

        <Typography variant="p" sx={{ fontSize: "1.2rem", marginY: "20px" }}>
          {error.error.message}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Link path="/">
            <Button
              sx={{
                background: "#75ba75",
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
