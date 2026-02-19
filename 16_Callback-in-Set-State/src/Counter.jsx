import { useState } from "react"

export default function Counter(){

    // useState initializes state variable "count" with 0
    // count → current state value
    // setCount → function used to update state
    let [count , setCount] = useState(0)

    // Function that runs when button is clicked
    let incCount = () => {

        // Functional update:
        // "perval" means previous value of count
        // React gives the latest updated value here
        // We increase it by 1
        setCount((perval) => perval + 1)

        // Again increasing by 1
        // Because we are using functional update,
        // React correctly updates state twice
        // So total increment = +2 on every click
        setCount((perval) => perval + 1)
    }

    return (
        <div>
            {/* Displays current count value */}
            <h1>{count}</h1>

            {/* When button is clicked, incCount function runs */}
            <button onClick={incCount}>Click Me</button>
        </div>
    )
}
