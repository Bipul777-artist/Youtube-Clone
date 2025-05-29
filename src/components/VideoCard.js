import { useEffect, useState } from "react";
import { Channels_API } from "../utils/constant";

const VideoCard = ({info}) => {

    const [channels, setChannels] = useState([]);

    // console.log(info);

    const {snippet, statistics} = info;

    const {title, thumbnails, channelTitle, channelId} = snippet;


    useEffect(() => {
        fetchChannels();
    },[])

    const fetchChannels = async () => {
    
        const channelsDetails = await fetch(Channels_API + channelId);
        const channelsDetailsJSON = await channelsDetails.json();
        setChannels(channelsDetailsJSON.items);
        // console.log(channelsDetailsAPI.items);
    }
    // console.log(channels);

    return(
        
        <div className="p-2 w-96">
           
            <img className="w-96 rounded-lg" alt="thumbnails" src = {thumbnails.medium.url} />
                
           
            <div className="flex">
                <>
                    <img className="h-12 w-12 p-2 rounded-full bg-center" src={channels[0]?.snippet?.thumbnails?.high.url} />
                </>
                <div className="inline-block">
                    <h1 className="h-13 w-72 rounded-none overflow-hidden pt-2 text-base text-wrap font-semibold">{title}</h1>
                    <p className="text-sm text-gray-500 cursor-pointer hover:text-black">{channelTitle}</p>
                    <p className="text-sm text-gray-500 cursor-pointer ">{statistics?.viewCount}</p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard;