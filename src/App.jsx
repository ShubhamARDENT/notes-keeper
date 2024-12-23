import Home from "../src/components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import StickyNotes from "./components/StickyNotes";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ marginTop: "115px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolistapp" element={<TodoList />} />
          <Route path="/stickynotes" element={<StickyNotes />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
