import React, { useState } from 'react';

function ListaTareas() {
    const [tareas, setTareas] = useState([
        { id: 1, nombre: 'Leer un libro', completada: false },
        { id: 2, nombre: 'Cocinar la cena', completada: false },
        { id: 3, nombre: 'Llamar a un amigo', completada: false },
    ]);

    const manejarCambio = (id) => {
        const nuevasTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada }; 
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={tarea.completada}
                                onChange={() => manejarCambio(tarea.id)}
                            />
                            {tarea.nombre}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;