import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './components/Card';
import DashBoard from './components/DashBoard';
import Navbar from './components/Navbar';
function App() {
  const [LocalStore, setLocalStore] = useState([])
  const updateLocalForAll = () => {
    let keys = Object.keys(localStorage)
    var values = [],
      i = keys.length;
    while (i--) {
      if (keys[i].startsWith('Item') === true){
        values.push(JSON.parse(localStorage.getItem(keys[i])));
      }
      console.log(values.length)
    }
    setLocalStore(values)

  }
  return (
    <>
      <Router>
        <Navbar updateLocalForAll={updateLocalForAll} localStorage={localStorage} />
        <Routes>
          <Route path='/' element={<DashBoard updateLocalForAll={updateLocalForAll} />} />
          <Route path='/card' element={<Card updateLocalForAll={updateLocalForAll} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
