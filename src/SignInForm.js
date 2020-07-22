import React from 'react';

class SignInForm extends React.Component {
  state = {
    username: ''
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSignIn(this.state.username)
  }

  render(){
    return (
      <div className="sign-in">
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <input value={this.state.username} onChange={this.handleChange} placeHolder= "Sign in..."/>
          <input type="submit" value="Sign In"/>
        </form>
      </div>
    )
  }
}
export default SignInForm;