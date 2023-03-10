import React, { useState, useEffect } from "react";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem("task-list");
    if (data) return JSON.parse(data);
    return []
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="grid grid-cols-1 my-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-3 lg:my-0 h-screen">
      <TaskForm addTask={addTask} />
      <TasksList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
