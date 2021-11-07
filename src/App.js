/* eslint-disable react/jsx-pascal-case */

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from "react";
import Header from "./pages/header/header"
import Sidebar from "./pages/sidebar/sidebar"
import Mainpage from "./pages/mainpage/mainpage"
import Collection_page from './pages/collection_page/collection_page'
import Detail_page from './pages/detail_page/detail_page'
import Profile_page_prev from './pages/profile_page/profile_page_prev'
import Profile_page_empty from './pages/profile_page/profile_page_empty'

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      width: "100%",
      background: "#FCFCFC",
    },
  };

  const [flag_sidebar, set_sidebar] = useState(false);
  const [ctheme, setTheme] = useState(true);

  return (

    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header flag_sidebar={flag_sidebar} set_sidebar={set_sidebar} ctheme={ctheme} ></Header>
        <div style={styles.contentDiv} >
          <div className="sidebar1" style={{ display: "none" }} >
            <Sidebar flag_sidebar={1} ctheme={ctheme} setTheme={setTheme}></Sidebar>
          </div>
          <div className="sidebar2">
            <Sidebar flag_sidebar={flag_sidebar} ctheme={ctheme} setTheme={setTheme}></Sidebar>
          </div>
          <Router>
            <Switch>
              <Route exact path="/">
                <Mainpage ctheme={ctheme} />
              </Route>
              <Route exact path="/Collection_page">
                <Collection_page ctheme={ctheme} />
              </Route>
              <Route exact path="/Detail_page">
                <Detail_page ctheme={ctheme} />
              </Route>
              <Route exact path="/Profile_prev">
                <Profile_page_prev ctheme={ctheme} />
              </Route>
              <Route exact path="/Profile_empty">
                <Profile_page_empty ctheme={ctheme} />
              </Route>
            </Switch>
          </Router>
        </div>
      </Web3ReactProvider>
    </>
  );
}

export default App;
