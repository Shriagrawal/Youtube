import './App.css';
import Header from '../src/Components/Header';
import Body from '../src/Components/Body'
import {Provider} from "react-redux"
import store from './Utils/store'
import VideoContainer from '../src/Components/VideoContainer'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'; 
import PlayingVideo from '../src/Components/PlayingVideo'
import { useState } from 'react';
//header
  //hamburger(toogle feature)
  //logo
  //Search

//body
   // icons
   // video cards

// video playing screen
const App = () => {
  const[filtereddata,setfiltereddata] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Body />}
            children={[ 
              <>
            <Route path="/" element={<VideoContainer />} />
            <Route path="/:id" element={<PlayingVideo />} />
            </>]}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
