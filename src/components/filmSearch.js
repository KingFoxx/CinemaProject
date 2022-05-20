import "..//App.css";
import { Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import Films from "../Bookings/film.json";
import Film from "../Bookings/Film";

const Search = (props) => {
  const searchRef = useRef(null);
  const searchName = window.localStorage.getItem("name");
  console.log("searchname: " + searchName);
  const item = Films.filter(function (object) {
    return object.name === searchName;
  }).map(function (object, i) {
    searchRef.current = object;
    console.log("The searched object is: ", object);
    console.log("And the object item is: " + object.name);
    return (
      <Grid key={object.id} item xs={12} lg={4}>
        <Film film={object} i={i} />
      </Grid>
    );
  });
  return (
    <div className="App OpeningTimes"><br/>
      <Grid container justify="center" spacing={2}>
        {item}
      </Grid>
    </div>
  );
};
export default Search;
