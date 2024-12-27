import { useEffect, useState } from "react";
import TaskList from "../TaskList";
import Button from "../Button";

import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Container,
  Typography,
  OutlinedInput,
  Button as ClearAllBtn,
  FormControl,
} from "@mui/material";

const Body = () => {
  const [value, setValue] = useState("");
  const [PrevTask, setTask] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const handleUpdateTask = (id, newText) => {
    const updatedTasks = PrevTask.map((task) =>
      task.id === id ? { ...task, Text: newText } : task
    );
    setTask(updatedTasks);
    setEditTaskId(null);
    setValue("");
  };

  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setValue(text);
  };

  const handleAddTask = () => {
    const GeneratedId = Math.floor(Math.random() * 100);
    const newTask = {
      id: GeneratedId,
      Text: value,
    };
    if (value.trim()) {
      setTask([...PrevTask, newTask]);
      setValue("");
    }
  };

  const handleRemoveTask = (id) => {
    const filteredTasks = PrevTask.filter((task) => task.id !== id);
    setTask(filteredTasks);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleSaveOrUpdate = () => {
    if (editTaskId !== null) {
      handleUpdateTask(editTaskId, value);
    } else {
      handleAddTask();
    }
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = PrevTask.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTasks);
  };

  useEffect(() => {
    if (PrevTask.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(PrevTask));
    }
  }, [PrevTask]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
    if (Array.isArray(parsedTasks)) {
      setTask(parsedTasks);
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: "150px" }}>
      <Box
        sx={{
          background: "white",
          padding: "20px",
          marginX: "10px",
          borderRadius: "6px",
          backgroundColor: "white",
          Width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: "600",
              fontfamily: "Rubik",
              textAlign: "center",
            }}
          >
            Todo App
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveOrUpdate();
            }}
          >
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <OutlinedInput
                sx={{
                  marginY: "20px",
                  borderRadius: "5px",
                  fontSize: "1.3rem",
                  width: "90%",
                  "& .MuiInputBase-input": {
                    paddingY: "12px",
                  },
                  background: "white",
                  border: "1px solid #2d8eff",
                  outline: "none",
                }}
                placeholder="Add your new todo"
                value={value}
                onChange={handleOnchange}
              />
              {/* add btn */}
              <Button
                onClick={handleSaveOrUpdate}
                icon={editTaskId ? faSave : faPlus}
                isVisible={true}
                bgColor={"#2d8eff"}
                fontColor={"white"}
              />
            </FormControl>
          </form>
        </Box>
        {/* component */}
        <TaskList
          tasks={PrevTask}
          onRemove={handleRemoveTask}
          onEdit={handleEditTask}
          onComplete={handleCompleteTask}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            fontSize: "1.2rem",
            marginTop: "10px",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "1.4rem",
              color: "white",
              fontWeight: "600",
            }}
          >
            You have {PrevTask.length} pending Tasks
          </Typography>
          <Box sx={{ marginTop: "10px" }}>
            {/* clear all btn */}
            {PrevTask.length >= 1 && (
              <ClearAllBtn
                sx={{
                  background: "white",
                  border: "2px solid #2d8eff",
                  color: "#2d8eff",
                  paddingX: "25px",
                  paddingY: "10px",

                  ":hover": {
                    background: "#2d8eff",
                    border: "2px solid white",
                    color: "white",
                  },
                }}
                onClick={handleClearAll}
              >
                Clear all
              </ClearAllBtn>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Body;
