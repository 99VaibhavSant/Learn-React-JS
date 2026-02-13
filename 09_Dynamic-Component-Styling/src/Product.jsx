import "./Product.css"

export default function Product({title , price}){
    // let styles = {backgroundColor:"blue"}
    let isDiscount = price>30000;
    let style = {backgroundColor : {isDiscount} ? "pink" : null };
    return(
        <div className="Product" style={style}>
            <h2>{title}</h2>
            <h3>Price: {price}</h3>
            {/* <p>{isDiscount}</p> */}
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    )
}
