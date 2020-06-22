import React from "react";
import { Button } from "@material-ui/core";
import "./TodoItem.css";
function TodoItem(props) {
  console.log(props);
  return (
    <div id={props.task.id} className="todo-item">
      <p>{props.task.task_name}</p>
      <p>Deadline : {props.task.deadline}</p>
      <p>priority : {props.task.priority}</p>

      <Button variant="contained" color="primary">
        Mark complete
      </Button>
    </div>
  );
}

export default TodoItem;
