import React from 'react';

export function TaskCard({ task, deleteTask }) {
  return (
    <div className="" >
      <h5>{task.title}</h5>
      <textarea
        name="Contenido"
        id="Content"
        rows="12"
        defaultValue={task.content}
        readOnly
      />
      <div>
        <button>Completar</button>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  );
}
