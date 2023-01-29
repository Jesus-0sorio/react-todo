import React, { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";
import { TaskState } from "./components/TaskState";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const data = localStorage.getItem("task-list");
    if (data) setTasks(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="grid grid-cols-3 gap-7">
      <TaskForm addTask={addTask} />
      <TasksList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
