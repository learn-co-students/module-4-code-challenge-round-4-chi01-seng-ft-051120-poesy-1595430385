import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      formShown: false,   
      poems: []
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poemArr => {
      let updatedPoems = poemArr.map(poemObj => {
        return {
          ...poemObj, 
          read: false
      }
    })
    this.setState({
      poems: updatedPoems
    })
  })
  }


  // handleRead = () => {
  //   this.setState({
  //     I don't quite remember how to do this part, 
  //     but it's kind of moot because I have to get the poems to render properly first
  //   })
  // }

  toggleForm = () => { 
    this.setState({
      formShown: !this.state.formShown

    })
  }


  render() {
    console.log(this.state)
    const formToggled = this.state.formShown
    console.log(formToggled)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
            {this.state.formShown ? <NewPoemForm /> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;

