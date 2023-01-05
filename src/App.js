import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News'; 
import {RouterProvider, Route ,createBrowserRouter,createRoutesFromElements,Outlet} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "1e22954e373a4b95aed62e2f89f9eb69";
  const [progress, setProgress] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route exact path='/MegaNews-React' element={<Root/>}>
      <Route index element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
      <Route exact path="/MegaNews-React/load" element={<LoadingBar height={3} color='#f11946' progress={progress}/>}/>
      <Route exact path="/MegaNews-React/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} /> 
      <Route exact path="/MegaNews-React/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
      <Route exact path="/MegaNews-React/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
      <Route exact path="/MegaNews-React/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/> 
      <Route exact path="/MegaNews-React/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/> 
      <Route exact path="/MegaNews-React/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/> 
      <Route exact path="/MegaNews-React/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/> </Route></>
      
    )
  );
 
    return (
      <div className='App'>
        <RouterProvider router={router}/>
      </div>
    );
 
}
const Root = () =>{

  return( <><NavBar/>
  <Outlet/>
  </>)
}

export default App;