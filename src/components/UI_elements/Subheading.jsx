import React from "react"
const Subheading = ({subheading}) => {
    return (
        <div className="flex text-2xl font-overpass600 relative my-2">
            <h1 className="tracking-wide text-black">{subheading}</h1>
            <div className="border-b-2 border-orange w-14 absolute bottom-0"></div>
        </div>
    )
}
export default Subheading