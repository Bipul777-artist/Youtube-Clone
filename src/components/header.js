import { faSearch, faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { YT_Search_API, YT_Search, test } from '../utils/constant';
import appStore from '../utils/appStore';
import { cacheResults, searchedResults, searchInput, getSearchInput, clearSearchInput, getSearchSuggestionsData } from '../utils/searchSlice';
import SearchedResults from './SearchedResults';
import {Search_Videos_By_Keyword} from "../utils/constant";

const Header = () => {

    // const [searchQuery, setSearchQuery] = useState("");
    const [Suggestions, setSuggestions] = useState([])
    const [SeeSuggestions, setSeeSuggestions] = useState(false);
    const dispatch = useDispatch();

    const searchCache = useSelector((appStore) => appStore.search);
    const searchInput1 = useSelector((appStore) => appStore.search.searchInput);
    // console.log(searchInput1);
   
    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {

            if (searchCache[searchInput1]) {
                setSuggestions(searchCache[searchInput1])
            } else {
                searchSuggestions()
            }
        } ,200)

        return () => {
            clearTimeout(timer);
        };

    }, [searchInput1])

    const searchSuggestions = async () => {
       // console.log("API CALL - " + searchQuery);
        const suggestions = await fetch(YT_Search_API + searchInput1);
        const suggestions_json = await suggestions.json();
        setSuggestions(suggestions_json[1]);  
        // Update Cache
        dispatch(cacheResults({
            [searchInput1] : suggestions_json[1]
        }))
    }

    const toggleHandler = () => {
        dispatch(toggleMenu());        
    }

    const getSearchSuggestions = async (e) => {
        e.preventDefault();
        navigate(`/results?search_query=${searchInput1}`, {state : {id: searchInput1}});
        console.log(searchInput1);
        const SearchedVideos = await fetch(YT_Search + `q=${searchInput1}`);
        const SearchedVideosJson = await SearchedVideos.json();
        console.log(SearchedVideosJson.items)
        dispatch(getSearchSuggestionsData(SearchedVideosJson.items));
        // setSeeSuggestions(""); 
        dispatch(clearSearchInput());
    }
    
    return (
        <div className="min-h-10 grid grid-flow-col gap-x-25 px-3 mx-2 my-2 py-2 box-border">

            <div className="col-span-1 flex">

                <img onClick={toggleHandler} className=" h-8 w-8 cursor-pointer" alt="hamburger-menu" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" />

                <Link to={"/"}><img className="h-6 w-25 pl-2" alt="youtube-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s" /> </Link>

            </div>
            
            <div className="col-span-10 h-8 ml-20">
                <form 
                    onSubmit={(e) => getSearchSuggestions(e)}
                >
                    <input 
                        className="border-box w-4/6 border-2 border-gray-300 rounded-s-2xl p-2"
                        type="text"
                        placeholder="Search"
                        value={searchInput1}
                        onChange={(e) => dispatch(getSearchInput(e.target.value))}
                        onFocus={(e) => setSeeSuggestions(true)}
                        onBlur={(e) => setSeeSuggestions(false)}
                    />
                    {/* {console.log(searchInput1)} */}
                    <button className='p-2.5 w-16 bg-gray-200 rounded-e-full '
                        
                    >
                        
                        <FontAwesomeIcon className='' icon= {faSearch} />
                    
                    </button>
                </form >
                {SeeSuggestions && 
                 (
                    <div className='absolute bg-white w-[35rem] rounded-md z-10' >

                        {Suggestions.length !== null && (
                            Suggestions.map((list, i) => 

                                <button key={i} className='w-full flex items-center py-2 hover:bg-gray-200 hover:rounded'
                                    onClick={() => dispatch(getSearchInput(list))}
                                >
                                    <FontAwesomeIcon className='px-3' icon= {faSearch} />
                                    <p className='text-md'>{list}</p>
                                </button>
                            )

                        )
                        
                        }
                        
                            {/* <ul className='p-4 font-medium '>
                                {Suggestions.map((s) => 
                                <button  key={s} className='block w-96'>
                                    <li className='py-2 text-md cursor-pointer hover:bg-slate-200 hover:rounded'><FontAwesomeIcon className='px-3' icon= {faSearch} />{s}</li>
                                </button>
                                )}
                            </ul> */}
                    </div> 
                 )
                }
            </div>

            <div className="col-span-1">
                
                <button className="border-2 border-gray-200 rounded-2xl flex items-center justify-between px-4 py-1.5 hover:bg-blue-200">
            
                    <FontAwesomeIcon icon = {faUser} />
                    <h3 className='text-cyan-600 font-bold pl-2'>Sign In</h3>
                </button>
            </div>
        </div>
    )
}

export default Header;