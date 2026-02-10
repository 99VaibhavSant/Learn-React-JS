import "./Product.css"

function Product({Name , Discription}){
    return(
        <div className="Product">
            <h1>Product is {Name}</h1>
            <p>Product Description is {Discription}</p>
        </div>
    )
}

export default Product
