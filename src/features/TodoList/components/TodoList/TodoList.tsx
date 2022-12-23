import { useQuery } from "@tanstack/react-query"
import { fetchTodos } from "@/features/TodoList"

const TodoList = () => {
  const { data, isFetching, isError, error } = useQuery(["fetch-todos"], fetchTodos)

  if (isFetching) return <p>Fetching...</p>

  if (isError) return <p>Error... {JSON.stringify(error)}</p>

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default TodoList
