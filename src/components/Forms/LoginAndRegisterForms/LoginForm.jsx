import React, { Component } from 'react';
import '../LoginAndRegisterForms/forms-style.css';
import FormErrors from '../../UI/FormErrors/FormErrors';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: { other: '' },
      usernameValid: false,
      passwordValid: false,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    }
    //login user
    this.props.login(this.props.history, userData)
      .catch(err => this.setState({ formErrors: { other: err } }));

  };

  render() {
    return (
      <div className="login">
        <form>
          <h1>Login</h1>
          <p>Please enter your credentials.</p>
          <FormErrors formErrors={this.state.formErrors} />
          <hr />
          <p>Username</p>
          <input placeholder="Enter Username" name="username" type="text" onChange={this.handleUserInput} />
          <p>Password</p>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.handleUserInput} />
          <hr />
          <button type="submit" className="registerbtn" onClick={this.submitFormHandler}>Login</button>

        </form>
      </div>
    );
  }

}

export default LoginForm;

