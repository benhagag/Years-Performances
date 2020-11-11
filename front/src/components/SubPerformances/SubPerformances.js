import React from 'react';
import classes from './SubPerformances.css';
import { Line, Circle } from 'rc-progress';


const Performances = [
    {label: 'DATA', type: 'data', color: 'blue'},
    {label: 'IT', type: 'it', color: 'red'},
    {label: 'רגולציה', type: 'regulation', color: 'pink'},
    {label: 'אבטחת מידע', type: 'cyber',  color: 'orange'},
    {label: 'פיתוח תוכנה', type: 'programing', color: 'cyan'},
    {label: 'תקשורת', type: 'communications', color: 'brown'},
    {label: 'מערכת ליבה', type: 'coreSystems', color: 'purple'},
    {label: 'חדשנות', type: 'innovation', color: 'yellow'}
];

const subPerformances = props => (
    <div className={classes.SubPerformances}>

          {
            Performances.map(performance => (
               <div key={performance.type}>
                    <Line 
                        className={classes.progress} 
                        percent={props.subPerformances[performance.type]} 
                        strokeWidth="7" 
                        trailWidth="7" 
                        trailColor="black"
                        strokeColor={performance.color} 
                    />
                    <span>{` : (${props.subPerformances[performance.type]}%)${performance.label}`}</span>
                </div>
                
            ))
        }
       
      
    </div>
);

export default subPerformances;