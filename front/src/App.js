import React, { Component } from 'react';
import classes from './App.css';

import MainPerformances from './components/MainPerformances/MainPerformances';
import SubPerformances from './components/SubPerformances/SubPerformances';
import Years from './components/Years/Years';


class App extends Component {

  state={
    subPerformances:{
      data: 50,
      it: 10,
      regulation:30,
      cyber:10,
      programing:17,
      communications: 85,
      innovation:94,
      coreSystems: 23,
    },
    mainPerformances:{
      cpe: 50,
      personalProject: 10,
    }  
  }
  /**
   * On click   the year we will get data from the back end
   * We will send in get request the Year anf by that we will get back the data result performance by each year
   */
  clickYearHandler(year){
    console.log(year);
  }

  render() {
    return (
      <div className={classes.App}>
        <ul>
          <SubPerformances subPerformances={this.state.subPerformances} />
          <MainPerformances mainPerformances={this.state.mainPerformances}/>
          <Years clicked={this.clickYearHandler} />
        </ul>
      </div>
    );
  }
}

export default App;
