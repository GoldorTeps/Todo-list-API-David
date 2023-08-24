
const API_BASE_URL = "https://assets.breatheco.de/apis/fake/todos/user/goldor";

export const fetchTodos = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Error al cargar los todos");
  }
  return response.json();
};

export const updateTodos = async (data) => {
  const response = await fetch(API_BASE_URL, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error al enviar los todos");
  }
};

export const clearTodos = async () => {
  const response = await fetch(API_BASE_URL, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al borrar los datos");
  }
};

export const createNewUser = async () => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    body: JSON.stringify([]),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Ha ocurrido un error al crear el nuevo usuario");
  }
};

