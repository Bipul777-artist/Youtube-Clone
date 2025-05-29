import React from "react";

const Button = ({name}) => {
    
    return(
        <div className="flex flex-nowrap">
            <button className="inline bg-gray-200 w-full py-1.5 px-4 m-2 text-xs font-bold rounded">{name}</button>
        </div>
    )
};

export default Button;