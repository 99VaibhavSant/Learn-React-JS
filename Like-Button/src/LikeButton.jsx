import { useState } from "react"
import "./LikeButton.css"
export default function LikeButton(){
    let [like , setLike] = useState(false)
    console.log(like);

    let styles = {color:"red"}

    let toggleLike = () => {
        setLike(!like)
    }

    return(
        <div className="main">
             <h1 onClick={toggleLike}>
                {like ? <i style={styles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
             </h1>
        </div>
    )
}
