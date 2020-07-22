import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSub = (event) => {
    event.preventDefault()
    let { title, author, content } = this.state
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({
        title,
        author,
        content
      })
    }
    fetch('http://localhost:6001/poems', reqObj)
    .then(resp => resp.json())
    .then(newPoemObj => {
      this.setState({
        title: '',
        author: '',
        content: ''
      })
      this.props.handlePoemSubmit(newPoemObj)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSub} className="new-poem-form">
        <input name='title' onChange={this.handleChange} placeholder="Title" value={this.state.title} />
        <input name='author' onChange={this.handleChange} placeholder="Author" value={this.state.author} />
        <textarea name='content' onChange={this.handleChange} placeholder="Write your masterpiece here..." rows={10} value={this.state.content} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
