import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {

    const [text, setText] = useState();
    const [darkTheme, setDarkTheme] = useState(false);

    const prime = useMemo(()=>findNthPrime(text),[text]);

    return (
        
           <div
                className={
                    "w-96 h-96 border border-green-800 m-auto " +
                    (darkTheme && "bg-gray-900 text-white")
                  }
            >
                <button
                className="border p-1 px-2 m-2"
                onClick={() => setDarkTheme(!darkTheme)}
                >
                    Theme
                </button>
            
            
            <div>
                <input 
                    className="m-2 border border-gray-300 text-black"
                    value={text}
                    type="number"
                    onChange={(e) => setText(e.target.value)}
                    
                />
                
                <button>Find</button>
                <h1>The Prime value is: {prime}</h1>
            </div>

            </div>

       
    )
};

export default Demo;