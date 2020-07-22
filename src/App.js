import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      poems: [],
      favorites: [],
      showForm: false,
      showFavorites: false,
    };
  }

  componentDidMount() {
    const API = "http://localhost:6001/poems";

    fetch(API)
      .then((resp) => resp.json())
      .then((poems) => this.setState({ poems: poems }));
  }

  toggleForm = () => {
    const newShowForm = !this.state.showForm;
    this.setState({ showForm: newShowForm });
  };

  sendData = (poem) => {
    const API = "http://localhost:6001/poems";

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poem),
    };

    fetch(API, configObj)
      .then((resp) => resp.json())
      .then((poem) => {
        this.setState({
          poems: [...this.state.poems, poem],
        });
      });
  };

  handleFavorite = (poem) => {
    if (!this.state.favorites.includes(poem)) {
      this.setState({
        favorites: [...this.state.favorites, poem],
      });
    }
  };

  toggleFavorites = () => {
    const showFavorites = !this.state.showFavorites;
    this.setState({
      showFavorites: showFavorites,
    });
  };

  filterPoems = () => {
    if (this.state.showFavorites) {
      return this.state.favorites;
    } else {
      return this.state.poems;
    }
  };

  handleDelete = (poem) => {
    const poemId = poem.id;
    const API = "http://localhost:6001/poems";

    let configObj = {
      method: "DELETE",
    };

    fetch(API + "/" + poemId, configObj)
      .then((resp) => resp.json())
      .then((json) => console.log(json));

    const updatedPoems = this.state.poems.filter((poemObj) => {
      if (poemObj.id !== poem.id) {
        return poemObj;
      }
    });

    const updatedFavPoems = this.state.favorites.filter((poemObj) => {
      if (poemObj.id !== poem.id) {
        return poemObj;
      }
    });

    this.setState({
      poems: updatedPoems,
      favorites: updatedFavPoems,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          <button onClick={this.toggleFavorites}>Show/hide favorites</button>
          {this.state.showForm ? (
            <NewPoemForm sendData={this.sendData} />
          ) : null}
        </div>
        <PoemsContainer
          poems={this.filterPoems()}
          handleFavorite={this.handleFavorite}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
