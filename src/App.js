
import './App.css';
import { useState } from "react";
import Header from "./pages/header/header"
import Sidebar from "./pages/sidebar/sidebar"
import Mainpage from "./pages/mainpage/mainpage"
import { Col, Row } from "reactstrap";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import {ThemeProvider} from "styled-components";
import { Global } from "../src/theme/global";
import { lightTheme, darkTheme } from "../src/theme/theme"


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
      background: `${({ theme }) => theme.body}`,
    },
  };

  const [theme, setTheme] = useState('light');
  const [flag_sidebar, set_sidebar] = useState(false);
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <Global/>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Row>
          <Col>
            <Header flag_sidebar={flag_sidebar} set_sidebar={set_sidebar}></Header>
          </Col>
        </Row>
        <div style={styles.contentDiv}>
          <Sidebar flag_sidebar={flag_sidebar}></Sidebar>
          <Mainpage></Mainpage>
          {/* <div style={styles.contentMargin}>
            <h1 style={{ padding: "20%" }}>This is Content Area</h1>
          </div>
          <button onClick={themeToggler}>Select Theme</button> */}
        </div>
      </Web3ReactProvider>
    </>
    </ThemeProvider>
  );
}

export default App;
