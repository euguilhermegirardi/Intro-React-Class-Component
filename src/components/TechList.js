import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [],
  };

  // LIFECYCLE
  // Executed as soon as the component appears on the screen.
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  // Executed whenever the props or state change (prevProps, prevState).
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executed when component no longer exists.
  componentWillUnmount() {

  }

  // arrow function to access the state.
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      // get the state and add 'this.state.newTech' as the last item.
      techs: [...this.state.techs, this.state.newTech],
      // clean the input after submit.
      newTech: ''
    })
  };

  handleRemove = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech =>
            <TechItem
              key={tech}
              // to give all the information to "TechItem.js"
              tech={tech}
              onRemove={() => this.handleRemove(tech)}
            />)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default TechList;