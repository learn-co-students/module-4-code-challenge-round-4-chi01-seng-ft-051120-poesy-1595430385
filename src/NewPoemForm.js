import React from "react";

const API = "http://localhost:6001/poems"

class NewPoemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      content: ""
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    }

    this.setState({
      title: "",
      author: "",
      content: ""
    })

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }

    fetch(API, reqObj)
    .then(resp => resp.json())
    .then(poem => {
      this.props.fetchPoems()
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input name="title" value={this.state.title} placeholder="Title" onChange={this.handleChange}/>
        <input name="author" value={this.state.author} placeholder="Author" onChange={this.handleChange}/>
        <textarea name="content" value={this.state.content} placeholder="Write your masterpiece here..." rows={10} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
