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

      let refPromise = axios.post("http://localhost:4040/discussion/create", {
        cus_id : formData.cus_id,
        mov_id : formData.mov_id,
        title : formData.title,
        rating : formData.rating,
        description : formData.description
      });
      refPromise.then((res) => console.log(res));
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
            <input class="col" type="number" name="cus_id" onChange={handleChange} placeholder="Your name" maxLength={40}/>
            <div class="col"/>
            <input class="col" type="number" name="mov_id" onChange={handleChange} placeholder="Movie name" maxLength={40}/>
          </div>
          <div class="row form-control-sm">
            <input class="col" type="text" name="title" onChange={handleChange} placeholder="Post title" maxLength={40}/>
            <div class="col"/>
            <div class="col container">
              <div class="row align-items-center">
                <span class="col h6">Select A Rating</span>
                <select  class="col" name="rating" onChange={handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
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