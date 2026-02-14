function handleFormSubmit(){
    event.preventDefault()
    console.log(event);
    console.log("form were Submit");
}


export default function Form(){
    return(
        <form>
            <input type="text" placeholder="Write Something"/>
            <button onClick={handleFormSubmit}>Form Submit</button>
        </form>
    )
}
