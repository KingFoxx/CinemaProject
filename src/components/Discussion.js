import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer, useState } from 'react';
import axios from 'axios';

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

      if (formData.cus_name == null || formData.movie == null || formData.title == null ||
          formData.description == null) {
        alert("Please complete the relevant fields");
      } else {
        let refPromise = axios.post("http://localhost:4040/discussion/create", {
          cus_name : formData.cus_name,
          movie : formData.movie,
          title : formData.title,
          rating : formData.rating,
          description : formData.description
        });
        refPromise.then((res) => console.log(res));
      }
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
            <input onChange={handleChange} class="col" type="text" name="cus_name" placeholder="Your name" maxLength={40}/>
            <div class="col"/>
            <div class="col container">
              <div class="row align-items-center">
                <span class="col"></span>
                <select onChange={handleChange} class="col" name="movie">
                  <option selected="selected">-- Movie --</option>
                  <option value="Movie 1">Movie 1</option>
                  <option value="Movie 2">Movie 2</option>
                  <option value="Movie 3">Movie 3</option>
                  <option value="Movie 4">Movie 4</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row form-control-sm">
            <input class="col" type="text" name="title" onChange={handleChange} placeholder="Post title" maxLength={40}/>
            <div class="col"/>
            <div class="col container">
              <div class="row align-items-center">
                <span class="col"></span>
                <select  class="col" name="rating" onChange={handleChange}>
                  <option selected="selected">-- Rating --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row form-control-sm">
              <textarea type="text" name="description" onChange={handleChange} placeholder="Discuss here..." maxLength={500}/>
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