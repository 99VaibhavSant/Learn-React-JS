import { useState } from "react"

export default function LudoBoard(){
    let [moves ,setMoves] = useState({blue:0 , yellow:0 , green:0 , red:0})

    let updateBlue = () => {
        setMoves((perMove)=> {
           return {...perMove , blue: perMove.blue+1}
        })
    }

    let updateYellow = () => {
        setMoves((preMove) => {
            return {...preMove , yellow: preMove.yellow+1}
        })
    }

    return(
        <div>
            <p>Game Begins</p>
            <div>
                <p>Blue moves {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves </p>
                <button>+1</button>
                <p>Red moves</p>
                <button>+1</button>
            </div>
        </div>
    )
}
