
import './App.css';
import { useState } from "react";
import Header from "./pages/header/header"
import Sidebar from "./pages/sidebar/sidebar"
import Mainpage from "./pages/mainpage/mainpage"
import { Col, Row } from "reactstrap";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { ThemeProvider } from "styled-components";
import { Global } from "../src/theme/global";
import { lightTheme, darkTheme } from "../src/theme/theme"
import { useDarkMode } from "./theme/userDarkMode"


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
      // background: `${({ theme }) => theme.body}`,
      background: "#FCFCFC",
    },
  };

  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // const [theme, themeToggler] = useDarkMode();
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
            <Mainpage ctheme={ctheme}></Mainpage>
            {/* <div style={styles.contentMargin}>
            <h1 style={{ padding: "20%" }}>This is Content Area</h1>
          </div>
          <button onClick={themeToggler}>Select Theme</button> */}
          </div>
        </Web3ReactProvider>
      </>
  );
}

export default App;
