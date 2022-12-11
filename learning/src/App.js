import {useState} from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AnotherListItem from './components/AnotherListItem';
import {profileData} from './dataContainer';
import ReactDOM from "react-dom/client";
import Profile from './page/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data,setData] = useState(profileData);

  return (
    // <>
    //   <Header bgColor="red" textColor="green" text={123}/>
    //     <div>
    //       My App
    //     </div>
    //   <ListItem/>
    //   <hr/>
    //   <AnotherListItem data={data}/>
    // </>

    // this portion is to learn how to use useParams hook
    <BrowserRouter>
    <Routes>
      <Route path="profile/:id/:name" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
