import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '',isVerified: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleonChange= this.handleonChange.bind(this);
  }

  handleonChange(value) {
    console.log("Captcha value:", value);
    this.setState({isVerified:true});
  }

  render() {
    return (
      <div>
        <h3>MikeDiary</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            My TodoList
          </label>
          <input
            id="new-todo"
            onChange={this.handleonChange}
            value={this.state.text}
          />
                  <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={this.handleonChange}
          />,
          <button disabled={!this.state.isVerified}>
            Add Item{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}



export default App;
