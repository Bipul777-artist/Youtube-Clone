import { faSearch, faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatMessage = ({name, message}) => {
    return (

        <div className="flex items-center p-2 ">
            <FontAwesomeIcon className='mr-2' icon = {faUser} />
            <>
                <p className='font-bold mr-2 font-sans text-gray-500 '>{name}</p>
                <p>{message}</p>
            </>
        </div>
    )
}

export default ChatMessage;