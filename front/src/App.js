import React, { Component } from 'react';
// import axios from 'axios';
import classes from './App.css';

import MainPerformances from './components/MainPerformances/MainPerformances';
import SubPerformances from './components/SubPerformances/SubPerformances';
import Years from './components/Years/Years';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      subPerformances:{
        data: 0,
        it: 0,
        regulation:0,
        cyber:0,
        programing:0,
        communications: 0,
        innovation:0,
        coreSystems: 0,
      },
      mainPerformances:{
        cpe: 0,
        personalProject: 0,
      },
      year: 2015

    };

    this.clickYearHandler(this.state.year);
  }

clickYearHandler(year){
    console.log(year);
    this.setState({year: year});
    fetch(`http://localhost:8080/tests/softwave/years-perfomance/back/?year=${year}`)
    .then(res => res.json())
    .then(
    (result) => {
      console.log(result);
      let subPerformances = {...this.state.subPerformances};
      let mainPerformances = {...this.state.mainPerformances};
      console.log(mainPerformances);
      // console.log(subPerformances);

      result.forEach(element => {

          mainPerformances[element.Performace_type] = element.Performace_percent;
          subPerformances[element.Performace_type] = element.Performace_percent;

      });

      this.setState({
        subPerformances: subPerformances,
        mainPerformances: mainPerformances
      });
    },
    (error) => {
      throw new Error(error)
    }
  )
}

  render() {
    
    return (
      <div className={classes.App}>
        <ul>
          <SubPerformances subPerformances={this.state.subPerformances} />
          <MainPerformances mainPerformances={this.state.mainPerformances}/>
          <Years clicked={this.clickYearHandler.bind(this)} year={this.state.year}/>
        </ul>
      </div>
    );
  }
}

export default App;
