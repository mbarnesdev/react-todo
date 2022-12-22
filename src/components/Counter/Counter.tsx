import { useCounter } from "../../hooks/useCounter.ts" 

const Counter = () => {
  const { count, increment, decrement } = useCounter(0)

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
