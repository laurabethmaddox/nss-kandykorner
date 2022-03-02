// Import React, useEffect, and useState
import React, { useEffect, useState } from "react"

// Define and export a component that is equal to a function
export const LocationList = () => {
    // Declare a variable named locations and setLocations that is equal to the useState function
    const [locations, setLocations] = useState([])

    // Invoke useEffect and fetch the locations data from the API
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(locations => {
                    setLocations(locations)
                })
        },
        []
    )

    // Return the rendered JSX 
    return (
        <>
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>
                            {locationObject.address}
                        </p>
                    }
                )
            }
        </>
    )
}
