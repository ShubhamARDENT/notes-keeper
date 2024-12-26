import { Container, Box, Typography, Button, Grid2 } from "@mui/material";
import { useState } from "react";
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
    const newCard = {
      id: Date.now(),
      color: genereateColor(),
      time: new Date().toLocaleTimeString(),
      value: state,
    };
    setCards((prevCards) => [...prevCards, newCard]);
    setState("");
  };
  // console.log(Cards);

  const initalCardAdd = () => {
    if (
      cards.length === 0 ||
      cards[cards.length - 1].value.length > 0 ||
      state.length > 0
    ) {
      handleCards();
    }
  };
  console.log(cards);

  // delete button
  const handleDelete = (id) => {
    const filterCard = cards.filter((card) => card.id !== id);
    setCards(filterCard);
  };

  const handleOnChange = (id, newValue) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, value: newValue } : card
      )
    );
  };

  // console.log(state);
  return (
    <Container>
      <Box
        sx={{
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
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
          onClick={initalCardAdd}
        >
          +
        </Button>
      </Box>

      <Grid2 container wrap="wrap" spacing={4}>
        {cards.map((card) => (
          <Grid2 item="true" key={card.id}>
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
