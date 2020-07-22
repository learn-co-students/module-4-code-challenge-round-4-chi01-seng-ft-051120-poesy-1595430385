import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";



const API = "http://localhost:6001/poems"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      poems: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(poemsData => {
      const poems = poemsData.map(poemObj => {
        return {
          ...poemObj
        }
      })

      this.setState({
        poems: poems
      })
    })
  }


  render() {
    const poemsToShow = this.state.poems
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={poemsToShow} />
      </div>
    );
  }
}

export default App;
