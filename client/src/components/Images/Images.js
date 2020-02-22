import React from "react";
import axios from "axios";
import './Images.css';


class Images extends React.Component {
  state = {
    selectedFile: null
  };
  fileSelectHandler = event => {
    console.log(event);
    this.setState({
    selectedFile: event.target.files[0]
    });
  };
  fileUploadHandler = ()=> {
    axios.post('/api/uploads')
  };
  render() {
    return (
    <>
      <input type='file' onChange={this.fileSelectHandler} />
      <button onClick={this.fileUploadHandler}>Upload</button>
      <img src={this.selectedFile} alt={this.selectedFile} />
    </>
    )
  };
};


export default Images