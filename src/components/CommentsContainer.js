import { text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faChevronUp, faChevronDown } from '@fortawesome/fontawesome-free-solid';
import { createContext, useContext, useState } from "react";

const CommentsData = [
    {
        name: 'Bipul Jha',
        text: "This is a random comment and has no meaning whatsoever :-)",
        replies:[],
    },
    {
        name: 'Bipul Jha',
        text: "This is a random comment and has no meaning whatsoever",
        replies:[
            {
                name: 'Bipul Jha',
                text: "This is a random comment and has no meaning whatsoever",
                replies:[],
            },
            {
                name: 'Bipul Jha',
                text: "This is a random comment and has no meaning whatsoever",
                replies:[
                    {
                        name: 'Bipul Jha',
                        text: "This is a random comment and has no meaning whatsoever",
                        replies:[
                            {
                                name: 'Bipul Jha',
                                text: "This is a random comment and has no meaning whatsoever",
                                replies:[],
                            },
                            {
                                name: 'Bipul Jha',
                                text: "This is a random comment and has no meaning whatsoever",
                                replies:[
                                    {
                                        name: 'Bipul Jha',
                                        text: "This is a random comment and has no meaning whatsoever",
                                        replies:[],
                                    }
                                ],
                            },
                        ],
                    }
                ],
            }
        ],
    },
    {
        name: 'Bipul Jha',
        text: "This is a random comment and has no meaning whatsoever",
        replies:[],
    },
    {
        name: 'Bipul Jha',
        text: "This is a random comment and has no meaning whatsoever",
        replies:[],
    },
]



const Comment = ({data}) => {

    const [childState, setChildState] = useState(false);
    const [icon, setIcon] = useState(faCaretDown);
    const handleChange = (key) => { 
        setChildState(!childState);
        data[1](!childState);
        !childState ? setIcon(faChevronDown) : setIcon(faChevronUp)
    }

    const {textDisplay, authorDisplayName, authorProfileImageUrl} = data[0]?.snippet?.topLevelComment?.snippet;

    return(
        
            <div className="flex justify-start content-center p-2 max-w-xl mx-2 my-4" >
            
                <img className="w-12 h-12 bg-center rounded-full" src={authorProfileImageUrl} />
                <div className="pl-2">
                    <p className="font-bold">{authorDisplayName}</p>
                    <p className="mb-5">{textDisplay}</p>
                    
                    {data[0]?.replies ? 
                    
                    <btn 
                        key= {data[0].id}
                        className="pt-2 text-blue-600 font-bold cursor-pointer hover:bg-blue-200 hover:rounded-md hover:p-3 hover:mt-3 hover:transition-all"
                        onClick={(key) => handleChange(key)}
                    >
                        <FontAwesomeIcon className="mr-2" icon={icon} />
                        {data[0]?.replies?.comments.length} replies
                    
                    </btn> 
                    : null
                    }
                </div>
            </div>
        
    )
}

const CommentList = ({Videocomments}) => {

    const [parentState, setparentState] = useState(false);

    const handleStateChange = () => {
        setparentState(!parentState);
    }
    
   return Videocomments.map((comment, index) => (
    
    <div key={index} className="">

        <Comment key={index} data={[comment, handleStateChange]} />
        {parentState && <div className="pl-5 border-l-gray border-l-2">
            {/* <h1>{comment?.replies?.comments[0]?.snippet?.textDisplay}</h1>  */}
            {comment?.replies?.comments.map((item, key) => { return (
                
                    <div key={index} className="flex content-center max-w-xl m-2">
                        <img className="h-12 w-12 flex content-center p-2 max-w-xl m-2 rounded-full" src={item?.snippet?.authorProfileImageUrl} />
                        <div className="p-2 text-center my-auto">
                            <p className="font-bold">{item?.snippet?.authorDisplayName}</p>
                            <p>{item?.snippet?.textDisplay}</p> 
                        </div>
                    </div>
                
            )})}
        </div>}
    </div>
    
   ))
}

const CommentsContainer = ({videoId}) => {
    // console.log(videoId);
    return(

        <div className="mt-5 border-t-2 border-t-gray-200">

            <CommentList Videocomments = {videoId} />
            
        </div>
        
    )
}

export default CommentsContainer;