
import './App.css';
import { useState } from "react";
import Header from "./pages/header/header"
import Sidebar from "./pages/sidebar/sidebar"
import Mainpage from "./pages/mainpage/mainpage"
import { Col, Row } from "reactstrap";

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };

  const [ flag_sidebar, set_sidebar] = useState(false);
  return (
    <>
      <Row>
        <Col>
          <Header flag_sidebar={flag_sidebar} set_sidebar={set_sidebar}></Header>
        </Col>
      </Row>
      <div style={styles.contentDiv}>
        <Sidebar flag_sidebar={flag_sidebar}></Sidebar>
        <div style={styles.contentMargin}>
          <h1 style={{ padding: "20%" }}>This is Content Area</h1>
        </div>
      </div>
    </>
  );
}

export default App;
