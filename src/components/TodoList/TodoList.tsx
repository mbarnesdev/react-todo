import { useQuery } from "@tanstack/react-query"
import { fetchTodos } from "@/services"

type TTodo = {
  id: string,
  content: string,
  completed: boolean,
}

const TodoList = () => {
    const { isLoading, isError, error, data } = useQuery(["fetch-todos"], fetchTodos)

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error...</p>

    return (
        <div>
            <ul>
                {data.map(({id, content, completed}: TTodo) => (
                    <li key={id}>{content} {completed ? "Y" : "N"}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
