import React, { Component } from 'react';
import { TextField, Button, Input } from '@material-ui/core';
import axios from 'axios';

class Form extends Component {
  state = {
    name: '',
    position: '',
    company: '',
    image: ''
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(value)
  };

  handleChangeIMG = e => {
    const name = e.target.name;
    const value = e.target.value;
    const files = e.target.files;
    const data = new FormData()
    data.append('file', files[0])
    this.setState({ [name]: data });
    //this.setState({ [name]: value });
    console.log(value)
  };

  submit = e => {
    e.preventDefault();
    const { name, position, company, image} = this.state;
    axios({
      url: '/add',
      method: 'POST',
      data: {
        name,
        position,
        company,
        image
      }
    })
      .then((response) => {
        this.props.addUser(response.data);
        this.setState({
          name: '',
          company: '',
          position: '',
          image: ''
        });
      })
      .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
        <h2>Please, Tell us about you</h2>
        <TextField
          id="standard-dense"
          value={this.state.name}
          label="Name"
          name="name"
          onChange={this.handleChange}
        />

        <TextField
          name="company"
          value={this.state.company}
          id="standard-dense"
          onChange={this.handleChange}
          label="Company"
        />

        <TextField
          name="position"
          value={this.state.position}
          id="standard-dense"
          onChange={this.handleChange}
          label="Position"
        />

        <Input
          name="image"
          type="file"
          value={this.state.image}
          data={this.state.image}
          id="standard-dense"
          onChange={this.handleChangeIMG}
          label="Image"
        />

        <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

      </form>
    );
  }
}

export default Form;
