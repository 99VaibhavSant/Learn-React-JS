function doSomothing(){
    console.log("Button is Click");
}

function mouseHover(){
    console.log("onMouseHover")
}

export default function  Button(){
    return(
        <div>
            <button onClick={doSomothing}>Click Me!</button>
            <p onMouseOver={mouseHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa possimus laudantium fugit ex, ut repellendus molestiae vero numquam cupiditate repudiandae hic, vel doloremque quod blanditiis. Deserunt laborum perferendis quibusdam?</p>
        </div>
    )
}
