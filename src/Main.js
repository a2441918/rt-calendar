import React, { Component } from 'react';
import Calendar from './components/calendar';

class Main extends Component {
  render () {
    return (
      <Calendar calendarData={this.props.calendarData}
                dayData={this.props.dayData}
      />
    );
  }
}

export default Main;
