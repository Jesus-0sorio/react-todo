import React, { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";
import { Footer } from "./components/Footer";

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
    <div className="grid grid-cols-1 my-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-3 lg:my-0 h-screen">
      <TaskForm addTask={addTask} />
      <TasksList tasks={tasks} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
