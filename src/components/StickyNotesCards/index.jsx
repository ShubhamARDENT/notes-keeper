import { Paper, Typography, TextareaAutosize, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StickyNotesCards = ({
  id,
  color,
  currentTime,
  onRemove,
  state,
  onChange,
}) => {
  // console.log(state);
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          fontFamily: "sans-serif",
          borderRadius: "15px",
          background: color,
          padding: "15px",
          position: "relative",
          "&:hover .close-btn": {
            visibility: "visible",
            opacity: "1",
          },
        }}
        variant="elevation"
        elevation={3}
      >
        {/* close btn  */}
        <IconButton
          className="close-btn"
          sx={{
            position: "abosolute",
            background: "black",
            color: "white",
            padding: "0px",
            borderRadius: "100%",
            minWidth: "30px",
            height: "30px",
            fontSize: "1rem",
            bottom: "30px",
            left: "245px",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0s, opacity 0.3s ease",
          }}
          onClick={() => onRemove(id)}
        >
          <CloseOutlinedIcon />
        </IconButton>
        <TextareaAutosize
          minRows={7}
          placeholder="Write your note here"
          style={{
            width: "90%",
            backgroundColor: color,
            border: "none",
            borderRadius: "4px",
            padding: "8px",
            fontSize: "1.5rem",
            resize: "none",
            outline: "none",
            fontFamily: "sans-serif",
          }}
          onChange={(e) => onChange(id, e.target.value)}
          value={state}
        />

        <Typography
          variant="p"
          sx={{
            fontFamily: "sans-serif",
            fontSize: "1rem",
            color: "gray",
          }}
        >
          {currentTime}
        </Typography>
      </Paper>
    </>
  );
};

StickyNotesCards.propTypes = {
  color: PropTypes.string,
  currentTime: PropTypes.string,
  onRemove: PropTypes.func,
  id: PropTypes.number,
  state: PropTypes.string,
  setState: PropTypes.any,
  onChange: PropTypes.func,
};
export default StickyNotesCards;
