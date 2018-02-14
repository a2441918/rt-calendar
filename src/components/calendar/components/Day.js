import React from 'react';
import classnames from 'classnames';
import uuid from 'node-uuid';
import {connect} from 'react-redux'
import {toggleEventList, setDay} from '../../../actions/actionCreators';

/**
 * Action to set the day for the event to be created
 * @param event
 * @param day
 * @param dispatch
 */
const selectDay = (event, day, dispatch) => {
	event.preventDefault(event);
	dispatch(setDay(day));
};

/**
 * Action to be dispatched to click on the date opens up Event List
 * @param event
 * @param dispatch
 */
const openEventList = (event, dispatch) => {
	event.preventDefault(event);
	dispatch(toggleEventList());
};

/**
 * Component that renders the day in a calendar
 * @param day
 * @param dayClasses
 * @param events
 * @param dispatch
 * @returns {*}
 * @constructor
 */
let Day = ({day, dayClasses, events, dispatch}) => {
	const timeClasses = classnames('time', dayClasses, 'blank');

	return (
		<time dateTime={day.format('YYYY-MM-DD')} className={timeClasses}>
  		<a href="#" onClick={(event) => selectDay(event, day, dispatch)}>
				<span className="caldate">{`${day.format('DD')} ${day.format('dddd')}`}</span>
				{events.map((event) => (<button className={`eventMarker ${event.eventType}`} key={uuid.v4()} onClick={(event) => openEventList(event, dispatch)}>{event.eventType ? `${event.eventType || ''}: ${event.eventName || ''} : ${event.eventTime || ''}` : ''}</button>))}
			</a>
		</time>
	);
};

Day = connect()(Day);

export default Day;
