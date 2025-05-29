// import { fasolid, faHouse } from '@fortawesome/fontawesome-free-solid';
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const isMenuOpen = useSelector((appStore) => appStore.app.isMenuOpen);
    const closeMenu = useSelector((appStore) => appStore.app.closeMenu);

    // Early Return Pattern
    // if (!isMenuOpen) return null;

    return (!isMenuOpen ? 

        // ( 
        //     <div className='w-20'>
                    
        //             <Link to='/'>
        //                 <span className='block cursor-pointer py-4 hover:bg-gray-200 hover:border-1 hover:rounded-md'>
        //                     <i className='fa-solid fa-house px-6' />
        //                     <h3 className='ml-2 text-xs '>Home</h3> 

        //                 </span>
        //             </Link > 
                    
                
        //         <span className=' block cursor-pointer py-4 hover:bg-gray-200 hover:border-1 hover:rounded-md'>
        //             <i className='fa-solid fa-play px-6' />
        //             <h3 className=' ml-2 text-xs'>Shorts</h3>
        //         </span>
        
        //         <span className=' block cursor-pointer py-4 hover:bg-gray-200 hover:border-1 hover:rounded-md'>
        //             <i className="fa-regular fa-bookmark px-6" />
        //             <h3 className=' ml-2 text-xs'>Subscriptions</h3>
        //         </span>
        //     </div>
        // ) 
        <div className='w-20 bg-white'>
           
        </div>
        : 
        (
        <div className="w-40 shadow-md z-20 bg-white h-full"> 

                <Link to="/">
                    <span className='flex items-center p-2 px-4 cursor-pointer hover:bg-gray-200 hover:border-1 hover:rounded-md'>
                        <i className='fa-solid fa-house' />
                        <h3 className=' ml-3 text-base '>Home</h3>
                    </span>
                </Link>
                
            
            <span className=' flex items-center p-2 px-4 cursor-pointer hover:bg-gray-200 hover:border-1 hover:rounded-md'>
                <i className='fa-solid fa-play' />
                <h3 className=' ml-3 text-base'>Shorts</h3>
            </span>

            <span className=' flex items-center p-2 px-4 cursor-pointer hover:bg-gray-200 hover:border-1 hover:rounded-md'>
                <i className="fa-regular fa-bookmark" />
                <h3 className=' ml-3 text-base'>Subscriptions</h3>
            </span>
            
            <ul className='border-t-2 py-3 px-4 '>
                <h3 className='font-semibold text-base cursor-pointer'>Subscriptions</h3>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Music</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Sports</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Gaming</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Movies</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Finance</li>
            </ul>

            <ul className='border-t-2 py-2 px-4 '>
                <h3 className='font-semibold text-base cursor-pointer'>Watch Later</h3>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Music</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Sports</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Gaming</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Movies</li>
                <li className='py-1 cursor-pointer text-center hover:bg-gray-200 hover:border-1 hover:rounded-md'>Finance</li>
            </ul>
        </div>

        )
        


    );
}

export default SideBar;