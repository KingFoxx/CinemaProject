import React,{useRef, useState} from 'react';
import Film from '../Bookings/film.json';

function Search(){
   const searchName = window.localStorage.getItem('name');
   console.log("searchname: " + searchName);
   const item = Film.filter(function(object) {
     if (object.name === searchName) {
       console.log("The searched object is: " + object);
       console.log("And the object item is: " + object.name);
     }
   });
   console.log(item);
}

export default Search;