import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import ImageUpload from './components/ImageUpload';
import axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = () => {
    axios.get('/users')
      .then((response) => {
        const { users } = response.data;
        this.setState({ users: [...this.state.users, ...users] })
      })
      .catch(() => alert('Error fetching new users'));
  };


  addUser = ({ name, position, company, image }) => {
    this.setState({
      users: [...this.state.users, { name, position, company, image }]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addUser={this.addUser}/>
        < DisplayUsers users={this.state.users} />
        <ImageUpload />
      </div>
    );
  }
}

export default App;
