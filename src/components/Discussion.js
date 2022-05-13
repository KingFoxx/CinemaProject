import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
  return {...state, [event.name]: event.value}
}

const Discussion=()=> {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submission, setSubmission] = useState({});

  const handleSubmit = event => {
      event.preventDefault();
      console.log("Submit button was pressed");
      console.log(formData);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
  }

  return(
    <div>
      <h3>Discussion Thread!</h3>
      <form onSubmit={handleSubmit}>
        <div class="container form-group">
          <div class="row form-control-sm">
            <input class="col" type="text" name="name" onChange={handleChange} placeholder="Your name" maxLength={40}/>
            <div class="col"/>
            <input class="col" type="text" name="movie" onChange={handleChange} placeholder="Movie name" maxLength={40}/>
          </div>
          <div class="row form-control-sm">
            <input class="col" type="text" name="title" onChange={handleChange} placeholder="Post title" maxLength={40}/>
            <div class="col"/>
            <div class="col container">
              <div class="row align-items-center">
                <span class="col h4">Select A Rating</span>
                <select  class="col" name="rating" onChange={handleChange}>
                  <option>1 Star</option>
                  <option>2 Star</option>
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row form-control-sm">
              <textarea type="text" name="body" onChange={handleChange} placeholder="Discuss here..." maxLength={500}/>
          </div>
            
        </div>
        <div class="text-center">
            <button class="mt-3" type="submit">Submit</button>
        </div>
          
      </form>
      <hr/>
    </div>
  );
}

export default Discussion;