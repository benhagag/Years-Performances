import React from 'react';
import classes from './Years.css';


const years = props => {

    const yearArray = [2015, 2016, 2017, 2018, 2019];
    const listItems = yearArray.map((year) =>{
        if(year == props.year){
            return <li onClick={() => props.clicked(year)} className={classes.clicked}>{year}</li>
        }else{
            return <li onClick={() => props.clicked(year)}>{year}</li>
        }
        
        
    });

    return (
        <div className={classes.Years}>
            <ul>
               {listItems}
            </ul>
        </div>

    )
}

export default years;