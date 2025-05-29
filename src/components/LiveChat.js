import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import appStore from "../utils/appStore";
import { generateName, pickRandom } from "../utils/helper";
import { faSearch, faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LiveChat = () => {

    const [LiveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessage = useSelector((appStore) => appStore.chat.messages)

    useEffect(() => {

        const timer = setInterval(() => {
            console.log("API POLLING")

            dispatch(addMessage({
                name: generateName(),
                message: pickRandom(),
            }))

        },5000)

    }, [])


    return (
    <>
        <div className="h-96 w-96 border-2 flex flex-col-reverse border-gray rounded-lg overflow-y-scroll">
            {chatMessage.map((c, i) =>
                <ChatMessage 
                    key={i}
                    name={c.name}
                    message={c.message}
                />
            )}
        </div>

        <form className="min-w-96 pt-2"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Bipul Jha",
                    message: LiveMessage,
                }))
                setLiveMessage("")
                // console.log("Submission Completed")
            }}
        
        >
            <btn className="flex items-center">

                <input 
                    onChange={((e) => setLiveMessage(e.target.value))}
                    value={LiveMessage} 
                    placeholder="Search"
                    className="min-w-80 border-2 border-gray-300 rounded-l-full py-1.5 px-4" 
                />
                <FontAwesomeIcon className='bg-gray-400 py-3 px-4 border-gray rounded-r-full' icon= {faSearch} />
            </btn>
            
            
        </form>
    </>
    )
};

export default LiveChat;