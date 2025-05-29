import { useEffect, useState } from "react";
import { Youtube_Video_API, Channels, Search_Videos_By_Keyword, YT_Video_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/appStore";
import ShimmerUI from "./ShimmerUI";
import { getVideos } from "../utils/searchSlice";
import SearchedResults from "./SearchedResults";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const videos = useSelector((appStore) => appStore.search.popularVideos)
    const searchVideos = useSelector((appStore) => appStore.search.searchSuggestionsData);
    const [videoList, setVideoList] = useState([]);

    const typedInput = useSelector((appStore) => appStore.search.searchInput)
    
    const searchParams = useParams();
    // console.log(searchParams);

    useEffect(() => {
      fetchVideo();
    },[])

    const fetchVideo = async () => {
        const data = await fetch(Youtube_Video_API);
        console.log(data);
        const json = await data.json();
        setVideoList(json.items);
        // console.log(json.items);
        dispatch(getVideos(json.items));
    }

    return videos === null ? (
        <ShimmerUI />
    ) :
     (
        <div className="flex">
            {searchVideos !== null ? (
                <div className="">
                    {/* <p>Search Results For {searchParams.get('search_query')}</p> */}
                    {searchVideos.map((video) => {
                        
                        return (
                            <Link>
                                <SearchedResults />
                                
                            </Link>
                        )
                    })}
                </div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {/* {console.log(videos)} */}
                    {videos.map((video) => {
                        return (
                        <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard info={video}/></Link>
                        )
                    })}
                </div>
            )

            
            }
        </div>
     )
}

export default VideoContainer;