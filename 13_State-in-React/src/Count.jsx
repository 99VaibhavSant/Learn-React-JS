import { useState } from "react"

export default function Count(){
    let [count , setCount] = useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
            <button onClick={()=>setCount(Math.max(count - 1 , 0))}>Decrease</button>
        </div>
    )
}
