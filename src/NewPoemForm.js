import React from "react";

const poemsURL = 'http://localhost:6001/poems'

class NewPoemForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
      author: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    const reqObj ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    
    fetch(poemsURL, reqObj)
    .then(resp => resp.json())
    .then(poemJSON => {
      this.setState({
        poems: {...this.props.poems, poemJSON}
      })
    })
  }
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input name='title' placeholder="Title" onChange={this.handleChange} />
        <input name='author' placeholder="Author" onChange={this.handleChange} />
        <textarea name='content' placeholder="Write your masterpiece here..." rows={10} onChange={this.handleChange} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
