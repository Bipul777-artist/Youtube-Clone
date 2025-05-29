import { useRef } from "react";
import { useState } from "react"

const Demo2 = () => {

    let x = 0;
   
    const [y, setY] = useState(0);

    const ref = useRef(0);
    console.log(ref.current);

    return (
        <div className="border-2 m-4 border-black w-96 h-96">
            <div className="flex m-2 items-center ">
                <h1>Normal Variable </h1>
                <span className="bg-black text-white w-10 h-10 mx-2 p-2 rounded">
                    {x}
                </span>
                <button
                    className="bg-gray-500 p-2 ml-2 rounded"
                    onClick={() => {
                        x =  x+1;
                        console.log("Normal Variable - " + x);
                    }}
                    
                >Increase X
                    
                
                </button>
                
            </div>

            <div className="flex m-2 items-center ">
                <h1>State Variable </h1>
                <span className="bg-black text-white w-10 h-10 mx-2 p-2 rounded">
                    {y}
                </span>
                <button
                    className="bg-gray-500 p-2 ml-2 rounded"
                    onClick={() => {
                        setY(y+1);
                        console.log("State - " + y);
                    }}
                    
                >Increase Y
                    
                
                </button>
                
            </div>

            <div className="flex m-2 items-center ">
                <h1>Ref </h1>
                <span className="bg-black text-white w-10 h-10 mx-2 p-2 rounded">
                    {ref.current}
                </span>
                <button
                    className="bg-gray-500 p-2 ml-2 rounded"
                    onClick={() => {
                        ref.current = ref.current + 1;
                        console.log("Ref - " + ref.current);
                    }}
                    
                >Increase Ref
                    
                
                </button>
                
            </div>

        </div>
    )
};

export default Demo2;