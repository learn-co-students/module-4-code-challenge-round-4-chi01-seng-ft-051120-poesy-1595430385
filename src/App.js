import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = "http://localhost:6001/poems"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      poems: [],
      showForm: false,
      button: "Show"
    }
  }

  componentDidMount() {
    this.fetchPoems()
  }

  fetchPoems = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(poems => {
      this.setState({
        poems: poems
      })
    })
  }

  changeForm = () => {
    this.setState({
      showForm: !this.state.showForm,
      button: this.state.button === "Show" ? "Hide" : "Show"
    })
  }

  showForm = () => {
    if (this.state.showForm) {
      return <NewPoemForm fetchPoems={this.fetchPoems} />
    } else {
      return null 
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.changeForm}>{this.state.button} new poem form</button>
          {this.showForm()}
        </div>
        <PoemsContainer poems={this.state.poems} fetchPoems={this.fetchPoems}/>
      </div>
    );
  }
}

export default App;
