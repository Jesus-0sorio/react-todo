import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addFormTask = (e) => {
    e.preventDefault();
    const newTask = { title, content, id: uuidv4() };
    addTask(newTask);
    setContent("");
    setTitle("");
  };

  return (
    <div className="my-auto mx-5 rounded-lg shadow border-2 p-4 bg-white">
      <div className="rounded-md block w-full">
        <h4 className="text-center text-2xl mb-1.5 border-b-2 border-gray-300 pb-3 w-full ">
          Crear Tarea
        </h4>
        <form onSubmit={addFormTask}>
            <input
              type="text"
              id="title"
              className="border-b-2 block border-gray-300 w-full p-2 my-1.5 focus:outline-0 "
              placeholder="Titulo"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
              required
            />
            <textarea
              name="contenido"
              id="taskContent"
              placeholder="Descripcion"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              rows="9"
              required
              className="w-full border-b-2 resize-none border-gray-300 p-2 my-1.5 focus:outline-0 "
            />
          <div>
            <button className="block mx-auto mt-1 bg-blue-500 text-white hover:bg-blue-700 w-full py-3 rounded-lg">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
