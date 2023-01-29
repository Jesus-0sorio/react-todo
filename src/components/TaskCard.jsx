import React from "react";

export function TaskCard({ task, deleteTask }) {
  return (
    <div className=" shadow p-6 border border-gray-200 rounded-lg">
      <h5 className="text-2xl lg:text-3xl p-1">{task.title}</h5>
      <textarea
        name="Contenido"
        id="Content"
        rows="7"
        defaultValue={task.content}
        className="resize-none w-full p-1 text-lg lg:text-xl"
        readOnly
      />
      <div className="grid grid-cols-2 gap-4">
        <button className="text-center bg-green-500 rounded-lg text-md md:text-md text-white">Completar</button>
        <button className="text-center rounded-lg px-3 py-1 bg-red-600 text-white text-md md:text-md" onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  );
}
