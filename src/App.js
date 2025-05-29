import './App.css';
import Header from './components/header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import SearchedResults from './components/SearchedResults';
import SideBar from './components/SideBar';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';


const AppRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children:[
      {
        path: "/",
        element: (
          <div className='w-full'>
            <Header className="w-full" />
            <div className='flex'>
              <SideBar />
              <MainContainer />
            </div>
            
          </div>
        )
      }, 
      {
          path:"/watch",
          element: (
          <div>
              <Header />
              <div className='flex'>
                <SideBar />
                <WatchVideo />
              </div>
          </div>
          )
      },
      {
        path:"/results",
        element: (
          <div>
            <Header />
            <div className='flex'>
              <SideBar />
              <SearchedResults />
            </div>
          </div>
        )
      },
      {
        path:"/demo",
        element: (
          <div>
            <Header />
            <div className='flex '>
            <SideBar />
            <Demo />
            <Demo2 />
            </div>
          </div>
        )
      }
    ]
}])


function App() {

  return (

    <div >
        <Provider store={appStore}>
          <div className=''>
            {/* <Header /> */}
            <RouterProvider router={AppRouter}  />
          </div>
        
        </Provider>
      
    </div>
  );
}

export default App;
