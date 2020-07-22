import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import LikedPoemsContainer from "./LikedPoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    showPoemForm: false,
    liked: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(poemData => {
      this.setState({
        poems: poemData
      })
    })
  }

  showPoemForm = () => {
    this.setState({
      showPoemForm: !this.state.showPoemForm
    })
  }

  handlePoemSubmit = (newPoemObj) => {
    this.setState({
      poems: [...this.state.poems, newPoemObj]
    })
  }

  deletePoem = (poemToDeleteId) => {
    fetch(`http://localhost:6001/poems/${poemToDeleteId}`, {
      method: 'delete'
    })
    .then(resp => resp.json())
    .then(data => {
      return data
    })
    const updatedPoems = this.state.poems.filter((poem) => {
      if (poem.id !== poemToDeleteId) {
        return poem
      }
    })
    this.setState({
      poems: updatedPoems
    })
  }

  likePoem = (id) => {
    console.log(id)
    const updatedPoems = this.state.poems.map((poem) => {
      if(poem.id === id) {
        return {
          ...poem,
          liked: true
          }
        } else {
          return poem
        }
      })
      this.setState({
        poems: updatedPoems
      })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showPoemForm}>Show/hide new poem form</button>
          {this.state.showPoemForm ?
          <NewPoemForm handlePoemSubmit={this.handlePoemSubmit}/>
          :
          null
          }
        </div>
        <PoemsContainer 
        likePoem={this.likePoem}
        deletePoem={this.deletePoem}
        poems={this.state.poems}/>
        <LikedPoemsContainer 
        deletePoem={this.deletePoem}
        poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
