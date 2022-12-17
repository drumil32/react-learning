import {useState} from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AnotherListItem from './components/AnotherListItem';
import {profileData} from './dataContainer';
import ReactDOM from "react-dom/client";
import Profile from './page/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UseRefExample1 from './components/UseRefExample1';
// import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';

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
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="profile/:id/:name" element={<Profile/>}/>
  //   </Routes>
  // </BrowserRouter>

  // <UseRefExample1/>
  // <UseRefExample2/>
  <UseRefExample3/>

  );
}

export default App;
