import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.setState({ name: "Paul" }, () =>
      console.log("STATE:SETTINGS:", this.state.settings)
    );
  }
  render() {
    return (
      <div>
        <h1>Snippet testing</h1>
        <h2>logging state as it changes</h2>
      </div>
    );
  }
}
export default App;
