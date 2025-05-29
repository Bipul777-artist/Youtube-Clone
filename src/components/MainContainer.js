import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import appStore from "../utils/appStore";

const MainContainer = () => {

    const searchedVideos = useSelector((appStore) => appStore.search.searchSuggestionsData);

    return (

        <div className="">

            {!searchedVideos && <ButtonList />}
            <VideoContainer  />
        </div>
    )
};

export default MainContainer;