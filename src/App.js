import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      poems: [],
      display: false,
    };
  }

  componentDidMount = () => {
    this.fetchPoems();
  };

  fetchPoems = () => {
    fetch("http://localhost:6001/poems")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          poems: data,
        })
      );
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  formData = (newPoem) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoem),
    };

    fetch("http://localhost:6001/poems", reqObj)
      .then((resp) => resp.json())
      .then(() => {
        this.fetchPoems();
      });
  };

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.display ? <NewPoemForm formData={this.formData} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
