import { useState } from "react"

const Counter = () => {
    const [Count,setCount] = useState (0) 
    return (
    <>
    <button onClick={() => setCount (Count - 1)}>
        Restar
    </button>
    <span>Cantidad: {Count} </span>
    <button onClick={ () => setCount(Count + 1)}>
        Contar
    </button>
    </>
    )
} 
 
export default Counter