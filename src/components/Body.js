
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import WatchVideo from "./WatchVideo";
import { Outlet } from "react-router-dom";

const Body = () => {

    return (
        <div className="grid grid-flow-col gap-x-3">
            {/* <SideBar /> */}
            <Outlet />
{/*           To make the below choices dynamic I will use Outlet here/  
            <MainContainer  />
            <WatchVideo /> */}
        </div>
    )
}

export default Body;