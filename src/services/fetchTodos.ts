type Todo = {
  id: string,
  content: string,
  completed: boolean,
}

export const fetchTodos = (): Promise<Todo[]> => {
    return fetch("http://localhost:3005/todos").then((res) => res.json())
}
