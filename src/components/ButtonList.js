import { useEffect } from "react";
import Button from "./Button";

const staticList = ["All", "Computer Programming", "Music", "Portfolio", "Media Theory", "Sports", "PlayList", "Live", "Meditation", "Information", "Sound",  "Recently Uploaded"];


const ButtonList = () => { 

     return(
        <div className="flex justify-center">
                {staticList.map((data, i) => (
                        <Button key={i} name={data} /> 
                ))}
        </div>
     )  
}

{/* <Button name = "All"/>
            <Button name = "Computer Programming"/>
            <Button name = "Music"/>
            <Button name = "Portfolio"/>

            <Button name = "Media Theory"/>
            <Button name = "Sports"/>

            <Button name = "PlayList"/>
            <Button name = "Live"/>
            <Button name = "Meditation"/>
            <Button name = "Information"/> */}
export default ButtonList;