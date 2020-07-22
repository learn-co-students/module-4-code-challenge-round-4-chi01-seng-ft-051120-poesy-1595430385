import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import SignInForm from "./SignInForm"
import Header from "./Header"



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      poems: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poemsArr => {
      this.setState({
        poems: poemsArr
      })
    })
  }

  handleMarkedRead = () => {
    this.setState({ read: !this.state.read})
  }

  handleSignIn = (username) => {
    this.setState({ username: username})
  }

  handleSignOut = () => {
    this.setState({ username: ''})
  }

  render() {
    const poemsToShow = this.state.poems
    console.log(poemsToShow)

    return (
      <div className="app">
        <div className="sidebar">
        {
          this.state.username ?
          <Header username={this.state.username} onSignOut={this.handleSignOut}/>
          :
          <SignInForm onSignIn={this.handleSignIn} />

        }
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={poemsToShow} handleMarkedRead={this.handleMarkedRead}/>
      </div>
    );
  }
}

export default App;
