import React,{useRef, useState} from 'react';
import Film from '../Bookings/film.json';

function Search(){
   const searchIndex = useRef(window.localStorage.getItem('index'));
    {Film.filter(object=>object.id=searchIndex)      
        .map((object)=>{
        return <div>{object.name}</div>
      })}
}

export default Search;