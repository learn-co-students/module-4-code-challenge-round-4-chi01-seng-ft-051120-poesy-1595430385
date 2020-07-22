import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from "./FavoritesContainer";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      poems: [],
      clicked: false,
      title: "",
      author: "",
      content: "",
      likedPoems: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(poemData => {
      this.setState({
        poems: poemData
      })
    })

  }


  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    })
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  

  handleSubmit = (event) => {
    event.preventDefault()
    let newPoem = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content
    }
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoem)
    })
    .then(resp => resp.json())
    .then(newPoemSet => {
      this.setState({
        poems: [...this.state.poems, newPoemSet],
        content: "",
        title: '',
        author: ''
      })
    })
    const fields = document.querySelectorAll("input")
    const textfield = document.querySelector("textarea")
    fields[0].value = ""
    fields[1].value = ""
    textfield.value = ""
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  handleLikeClick = (poemObj) => {
      const updatedPoem = {
        ...poemObj,
        favorite: true
      }
      this.setState({
        likedPoems: [...this.state.likedPoems, updatedPoem]
      })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          
          { !this.state.clicked ? false : <NewPoemForm 
            handleAuthorChange={this.handleAuthorChange} 
            handleTitleChange={this.handleTitleChange}
            handleContentChange={this.handleContentChange}
            handleSubmit={this.handleSubmit} /> }
          <br/><br/><br/>
          <FavoritesContainer likedPoems={this.state.likedPoems} />
        </div>
        <PoemsContainer poems={this.state.poems} handleLikeClick={this.handleLikeClick} />
      </div>
    );
  }
}

export default App;
