import {useState} from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AnotherListItem from './components/AnotherListItem';
import {profileData} from './dataContainer';

function App() {
  const [data,setData] = useState(profileData);

  return (
    <>
      <Header bgColor="red" textColor="green" text={123}/>
        <div>
          My App
        </div>
      <ListItem/>
      <hr/>
      <AnotherListItem data={data}/>
    </>
  );
}

export default App;
