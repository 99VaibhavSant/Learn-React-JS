// Import useState hook from React
import { useState } from "react"

// This is a functional component named Counter
export default function Counter(){

    // useState creates a state variable
    // count = current state value
    // setCount = function to update the state
    // 0 = initial value of count
    let [count , setCount] = useState(0)

    // Function that runs when button is clicked
    let incCount = () => {

        // Updating state
        // This tells React to increase count by 1
        // IMPORTANT: This triggers a re-render
        setCount(count + 1)

        // This console log shows the OLD value
        // Because state updates are asynchronous
        console.log(`inside incCount ${count}`);
    }

    // JSX (UI Part)
    return(
        <div>

                {/* Display current count value */}
                <h1>{count}</h1>

                {/* When button is clicked, incCount function runs */}
                <button onClick={incCount}>
                    Click Me
                </button>

        </div>
    )
}



/*
!🔥 Very Important Concept (Future Reminder)

setCount() does NOT update immediately
It schedules an update
After update → React re-renders the component
Then UI shows new value

*/
