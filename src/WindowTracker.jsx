// import React from "react"   challenge 2

// export default function WindowTracker() {

    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
    
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
//     React.useEffect(() => {
//         window.addEventListener("resize", function() {
//             setWindowWidth(window.innerWidth)
//         })
//     }, [])
    
//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// }

// ..............................................................

// useEffect cleanup function


import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWindowWidth () {
            console.log("Resized")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
