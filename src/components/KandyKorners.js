// Import React, useEffect, and useState
import React, { useEffect, useState } from "react"
import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList"

// Define and export a component that is equal to a function
export const KandyKorners = () => {
    // Return the rendered JSX 
    return (
        <>
            <h1>Kandy Korners</h1>

            <h2>Location List</h2>
            <LocationList />

            <h2>Product List</h2>
            <ProductList />
        </>
    )
}
