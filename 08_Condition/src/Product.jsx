import "./Product.css"

export default function Product({title , price}){
    // let isDiscount = price>30000 ? "5%" : null;
    return(
        <div className="Product">
            <h1>{title}</h1>
            <h3>Price: {price}</h3>
            {/* <p>{isDiscount}</p> */}
            {price > 30000 && <p>Discount of 5%</p>}
        </div>
    )
}
