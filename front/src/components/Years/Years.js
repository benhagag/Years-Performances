import React from 'react';
import classes from './Years.css';


const years = props => (
    <div className={classes.Years}>
       <ul>
        <li onClick={() => props.clicked(2015)}>2015</li>
        <li onClick={() => props.clicked(2016)}>2016</li>  
        <li onClick={() => props.clicked(2017)}>2017</li>
        <li onClick={() => props.clicked(2018)}>2018</li>
        <li onClick={() => props.clicked(2019)}>2019</li>
       </ul>
    </div>
);

export default years;