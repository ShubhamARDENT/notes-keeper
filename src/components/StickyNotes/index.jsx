import { Container, Box, Typography, Button, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import StickyNotesCards from "../StickyNotesCards";

const StickyNotes = () => {
  const [cards, setCards] = useState([]);
  const [state, setState] = useState("");
  // color genreater
  const genereateColor = () => {
    // 5 colors
    const CardColors = ["#f5945c", "#fec76f", "#75ba75", "#71a3c1", "#be95be"];
    const randomIndex = Math.floor(Math.random() * CardColors.length);
    return CardColors[randomIndex];
  };

  // genereate cards
  const handleCards = () => {
    if (cards.length > 0 && !cards[0].value.trim()) {
      return;
    }

    const newCard = {
      id: Date.now(),
      color: genereateColor(),
      time: new Date().toLocaleTimeString(),
      value: state,
    };
    setCards([newCard, ...cards]);
    setState("");
  };

  // delete button
  const handleDelete = (id) => {
    const filterCard = cards.filter((card) => card.id !== id);
    setCards(filterCard);
  };

  // udpate card value
  const handleOnChange = (id, newValue) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, value: newValue, time: new Date().toLocaleTimeString() }
          : card
      )
    );
  };

 

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("notes", JSON.stringify(cards));
    }
  }, [cards]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setCards(storedNotes);
  }, []);

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box
        sx={{
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "4rem", fontWeight: "300", marginRight: "60px" }}
        >
          Notes
        </Typography>
        <Button
          sx={{
            background: "black",
            color: "white",
            padding: "0px",
            borderRadius: "100%",
            minWidth: "50px",
            height: "50px",
            fontSize: "1.5rem",
          }}
          onClick={handleCards}
        >
          +
        </Button>
      </Box>

      <Grid2 container wrap="wrap" spacing={3}>
        {cards.map((card) => (
          <Grid2 item="true" xs={2} key={card.id}>
            {/* card components */}
            <StickyNotesCards
              color={card.color}
              currentTime={card.time}
              onRemove={handleDelete}
              id={card.id}
              state={card.value}
              setState={setState}
              onChange={handleOnChange}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default StickyNotes;
