import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Search_Videos_By_Keyword } from "../utils/constant";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const SearchedResults = () => {

    const typedInput = useSelector((appStore) => appStore.search.SearchInput)
    // console.log(typedInput);

    const location = useLocation();
    // console.log(location);
    
    const [videos, SetVideos] = useState([]);

    useEffect(() => {
        getSearchVideos();
    },[])

    const getSearchVideos = async () => {
        const SearchedVideo = await fetch(Search_Videos_By_Keyword + location.state.id);

        const json = await SearchedVideo.json();

        SetVideos(json.items);
        console.log(videos)
        
    }
    
    return (
        <div className="grid grid-template-col col-span-4">
            <video width="600" height="300">

            </video>
            <h1>{videos[0]?.snippet?.title}</h1>
        </div>
    )
};

export default SearchedResults;