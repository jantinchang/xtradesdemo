import React, { useState } from "react";
import './App.css';
import SideBar from './components/SideBar';
import Main from './components/Main';
import AppContext from './context/AppContext';

function App() {

  const [menuCollapse, setMenuCollapse] = useState(false);

  return (<>
    <AppContext.Provider value={{ menuCollapse, setMenuCollapse }}>
      <div style={{ display: 'flex', position: 'relative' }}>
        <SideBar />
        <Main />
      </div>
    </AppContext.Provider>
  </>
  );
}

export default App;
