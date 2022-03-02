// Import React, useEffect, and useState
import React, { useEffect, useState } from "react"

// Define and export a component that is equal to a function
export const ProductList = () => {
    // Declare a variable named products and setProducts that is equal to the useState function
    const [products, setProducts] = useState([])

    // Invoke useEffect and fetch the products data from the API
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then(products => {
                    setProducts(products)
                })
        },
        []
    )

    // Return the rendered JSX 
    return (
        <>
            {
                products.map(
                    (productObject) => {
                        return <p key={`product--${productObject.id}`}>
                            {productObject.candyName} is a {productObject.productType.type}
                        </p>
                    }
                )
            }
        </>
    )
}