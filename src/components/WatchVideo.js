import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { Playlist_API, Youtube_Video_API, YT_Video_API_ById, Channels_API, YT_Comments_API_by} from "../utils/constant";
import LiveChat from "./LiveChat";

const WatchVideo = () => {

  const [VideoDetails, SetVideoDetails] = useState([]);

  const [comments, SetComments] = useState([]);
  

  const [searchParams] = useSearchParams();
  // console.log(searchParams);

  const dispatch = useDispatch();
  // const VideoSuggestions = async () => {
    
  //   const suggestions = await fetch(Youtube_Video_API);

  //   const suggestions_data = await suggestions.json();

  //   console.log(suggestions_data);
    
  // }
 
 

  const getVideoDetails = async () => {
    const VideoData = await fetch(YT_Video_API_ById + searchParams.get("v"));

    const VideoData_Json = await VideoData.json();

    // console.log(VideoData_Json.items[0]);
    SetVideoDetails(VideoData_Json.items[0]);

    const VideoComments = await fetch(YT_Comments_API_by + searchParams.get("v"));

    const VideoCommentsJson = await VideoComments.json();
    // console.log(VideoCommentsJson.items);

    SetComments(VideoCommentsJson.items);

  }

  useEffect(() => {
    dispatch(hideMenu());
    getVideoDetails();
  }, []);

  return (
    
    <div className="absolute left-40 flex gap-x-4">
      <div className="block">
        <iframe
          className="rounded-md bg-center"
          width="650"
          height="384"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=rmdrIMl3DctB_Wrq"}
          title="YouTube video player"
          frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
        <div className="max-w-xl">

          <h1 className="font-bold text-xl py-2">{VideoDetails?.snippet?.title}</h1>
          
        </div>
        
        <div className="">
            <h1 className="font-bold text-xl flex items-center">{VideoDetails?.statistics?.commentCount} Comments</h1> 
            <CommentsContainer videoId = {comments}  />
            {/* {console.log(comments)} */}
        </div>
        
      </div>

      <div>
        
        <LiveChat />
      </div>
    
    </div>
  );
};

export default WatchVideo;
