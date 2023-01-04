import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News'; 
import {BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "1e22954e373a4b95aed62e2f89f9eb69";
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      /><Routes>
      
        
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}>
          <Route exact path="/business" component={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} /> 
          <Route exact path="/entertainment" component={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
          <Route exact path="/general" component={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
          <Route exact path="/health" component={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/> 
          <Route exact path="/science" component={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/> 
          <Route exact path="/sports" component={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/> 
          <Route exact path="/technology" component={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/> 
          </Route>
          </Routes>
        </Router>
      </div>
    )
 
}

export default App;