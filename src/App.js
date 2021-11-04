
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useState } from "react";
import Header from "./pages/header/header"
import Sidebar from "./pages/sidebar/sidebar"
import Mainpage from "./pages/mainpage/mainpage"
import Collection_page from './pages/collection_page/collection_page'
import Detail_page from './pages/detail_page/detail_page'


import { Col, Row } from "reactstrap";

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
        <Row>
          <Col>
            <Header flag_sidebar={flag_sidebar} set_sidebar={set_sidebar} ctheme={ctheme} ></Header>
          </Col>
        </Row>
        <div style={styles.contentDiv}>
          <Sidebar flag_sidebar={flag_sidebar} ctheme={ctheme} setTheme={setTheme}></Sidebar>
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
              {/* <Route exact path="/Collection_page" component={<Collection_page ctheme={ctheme} />} /> */}
            </Switch>
          </Router>
          {/* <Mainpage ctheme={ctheme}></Mainpage>
          <Collection_page ctheme={ctheme}></Collection_page> */}

        </div>
      </Web3ReactProvider>
    </>
  );
}

export default App;
