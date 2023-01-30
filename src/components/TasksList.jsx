import React from "react";
import { TaskCard } from "./TaskCard";

export function TasksList({ tasks, deleteTask }) {
  const taskPending = tasks.map((task) => (
    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
  ));

  const infoTask =
    taskPending.length !== 0 ? (
      <>
        <h4 className="text-2xl md:text-2xl lg:text-4xl text-center my-6">
          Tareas Pendientes
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 md:gap-3 xl:grid-cols-4 mx-6 xl:gap-4">
          {taskPending}
        </div>
      </>
    ) : (
      <p className="text-3xl text-center md:text-5xl xl:text-7xl">
        No hay tareas pendientes
      </p>
    );

    const classListTask =
    taskPending.length !== 0
      ? "sm:col-span-1 md:col-span-3 xl:col-span-3 h-full"
      : "col-span-3 m-auto";

  return <div className={classListTask}>{infoTask}</div>;
}

