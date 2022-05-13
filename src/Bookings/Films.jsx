import React from "react";
import "..//App.css";
import { Grid } from '@material-ui/core/';
import films from "./film.json"
import Film from './Film';

const Films = () => {
    return(
        <div className="App">
            <hr/>
            <Grid container justify="center" spacing={2}>
            {films.map((film) => (
                    <Grid key={film.id} item xs={12} lg={4}>
                        <Film film={film} />    
                    </Grid>
                ))}
            </Grid>
            <br/>
        </div>
    );
};

export default Films;