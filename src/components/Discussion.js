import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import axios from 'axios';

const formReducer = (state, event) => {
  return {...state, [event.name]: event.value}
}

const Discussion=()=> {
  const loginRef = useRef(null);
  const [loginState, setLoginState] = useState(false);

  const [formData, setFormData] = useReducer(formReducer, {});
  const dis_obj = useRef([]);
  const [useDis, setUseDis] = useState([]);

  const { state } = useLocation();

  // Collapsible setup
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();


  const handleSubmit = event => {
      event.preventDefault();
      console.log("Submit button was pressed");
      // console.log(formData);

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
        // The response comes back as an object which can be useful
        refPromise.then((res) => {
          console.log(res);
        });
      }
  }

  // Used so the page is refreshed with the new data when the data is retrieved from the database
  useEffect(() => {
    let refPromise = axios.get("http://localhost:4040/discussion/readAll", {});
    refPromise.then((res) => {
      dis_obj.current = res.data
      // This line is only used so the data on the page re-renders
      setUseDis(res.data);
    });
    // console.log(dis_obj.current);
      
    loginRef.current = (JSON.parse(window.localStorage.getItem('loginRef')));
    if (loginState == false) {
      setLoginState(true);
    }
  });

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
    console.log(JSON.parse(window.localStorage.getItem('loginState')));
  }

  const consoleLog = () => {
    console.log("This is state object with login details");
    console.log(state);
  }

  return(
    <div>

      <h3 class="text-center" style={{marginTop: 12}}>Discussion Thread!</h3>

      <hr/>

      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <button type="button" style={{fontSize: 16, textAlign: 'right', margin: 16, paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 5}}>
              {isExpanded ? 'Cancel' : 'Add A New Post'}</button>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
          <form onSubmit={handleSubmit}>
        <div class="container form-group">
          <div class="row form-control-sm">
            <input onChange={handleChange} class="col" type="text" name="cus_name" disabled
            value={loginRef.current == null ? "Guest" : loginRef.current.name} maxLength={40}/>

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
            <button class="mt-3" type="submit" style={{fontSize: 16, textAlign: 'right', margin: 16, paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 5}}>Submit</button>
        </div>
          
      </form>
      
        </div>
        </div>
      
    </div>


      <div>


      </div>
      <hr/>

      <h3 class="text-center">Discusson Posts</h3>

      <hr/>
      
      {/* This is the block that displays the discussion topics */}
      {
      <div className="wrapper" class="container">
        <div>

        </div>
        {dis_obj.current.map((obj) => 
          <ul>
            <li class="row">
              <span class="col">User: <strong>{obj.cus_name}</strong></span>
              <span class="col">Movie: <strong>{obj.mov_name}</strong></span>

            </li>
            <li class="row">
              <span class="col">Title: <strong>{obj.title}</strong></span>
              <span class="col">Rating: <strong>{obj.rating} / 5</strong></span>
            </li>
            <p style={{height: 160, padding: 5, marginTop: 5, backgroundColor: "grey"}} class="col">Comment: <br/>{obj.description}</p>
            <hr/>
          </ul>
        )}
      </div>
      }
    </div>
  );
}

export default Discussion;