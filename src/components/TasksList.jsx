import React from "react";
import { TaskCard } from "./TaskCard";

export function TasksList({ tasks, deleteTask }) {
  return (
    <div className="col-span-2">
      {tasks.map(task => (<TaskCard key={task.id} task={task} deleteTask={deleteTask} />))}
    </div>
  );
}
