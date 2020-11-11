import React, { useEffect }  from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import classes from './MainPerformances.css';


const Performances = [
    {label: 'CPE', type: 'cpe', color: 'rgba(199, 62, 169'},
    {label: 'פרויקט אישי', type: 'personalProject', color: 'rgba(17, 230, 220'}
];


const mainPerformances = props => {
    

    useEffect(() => {
        document.querySelectorAll('.CircularProgressbar-text').forEach((element, i) =>  element.setAttribute('x', '20'))
    });
    
    return(
        <div className={classes.MainPerformances}>

        {
            Performances.map(performance => (
                    <CircularProgressbar
                        key={performance.type}
                        className={classes.CircularProgressbar}
                        value={props.mainPerformances[performance.type]}
                        text={`${performance.label} ${props.mainPerformances[performance.type]}%`}
                        styles={buildStyles({
                            fontSize:'5px',
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.25,
                        
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                        
                            // Text size
                            textSize: '10px',
                        
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                        
                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                        
                            // Colors
                            pathColor: `${performance.color}, ${props.mainPerformances[performance.type] / 100})`,
                            textColor: 'white',
                            trailColor: 'black',
                            backgroundColor: '#3e98c7',
                        })}
                    />
            ))

        }


        </div>
    )
};

export default mainPerformances;