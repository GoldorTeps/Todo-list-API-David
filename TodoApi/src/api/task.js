
const API_BASE_URL = "https://playground.4geeks.com/apis/fake/todos/user/goldor";

export const fetchTodos = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Error al cargar los todos");
  }
  return response.json();
};


export const addTodo = async (newTodo) => {
  try {
    // Obtener la lista actual de tareas del servidor
    const currentTodos = await fetchTodos();

    // Agregar la nueva tarea a la lista
    const updatedTodos = [...currentTodos, newTodo];

    // Enviar la lista actualizada al servidor utilizando PUT
    const response = await fetch(API_BASE_URL, {
      method: "PUT",
      body: JSON.stringify(updatedTodos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al agregar una nueva tarea");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const deleteTodo = async (todoId) => {
  const response = await fetch(`${API_BASE_URL}/${todoId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar la tarea");
  }
};


export const clearTodos = async () => {
  const response = await fetch(API_BASE_URL, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar todas las  tareas");
  }
};

