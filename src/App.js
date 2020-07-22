import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const poemsURL = 'http://localhost:6001/poems'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      poems: [],
      formActive: false
    }
  }

  componentDidMount() {
    fetch(poemsURL)
    .then(resp => resp.json())
    .then(poemJSON => {
      this.setState({
        poems: poemJSON
      })
    })
  }

  toggleForm = () => {
    this.setState({
      formActive: !this.state.formActive
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.formActive && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
