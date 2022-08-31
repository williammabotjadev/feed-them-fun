import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
//Explore more Monday React Components here: https://style.monday.com/
import { AttentionBox } from "monday-ui-react-core/dist/AttentionBox";
import Box from '@mui/material/Box';
import AppBar from './components/AppBar';
import ButtonBases from "./components/Menu";

const monday = mondaySdk();

const styles = {
  boxWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return (
      <>
        <div className={styles.boxWrapper}>
          <AppBar />
          <ButtonBases />
        </div>
      </>
    );
  }
}

export default App;
