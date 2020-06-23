import React, { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Button } from "@material-ui/core";
// idea
// fetch api , get list of todo , for each todo
// render todoItem
// todo list is a collection of todoitem

// mock data

function getTodoList() {
  return [
    { id: 1, task_name: "listen to music", priority: "HIGH", deadline: "" },
    { id: 3, task_name: "finish cooking", priority: "HIGH", deadline: "" },
    { id: 4, task_name: "clean the room", priority: "HIGH", deadline: "" },
    { id: 5, task_name: "refactor the code", priority: "HIGH", deadline: "" },
  ];
}

function TodoList() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(getTodoList());
  }, []);

  const handleComplete = (id) => {
    let filteredList = taskList.filter((eachTask) => eachTask.id !== id);
    console.log(filteredList);
    setTaskList(filteredList);
  };
  return (
    <div>
      <p>You have {taskList.length} tasks to do today ._.</p>
      <div>
        {taskList.map((eachTask) => (
          <TodoItem task={eachTask} onComplete={handleComplete} />
        ))}
      </div>
      <Button variant="contained" color="secondary">
        Add new task
      </Button>
    </div>
  );
}

export default TodoList;
