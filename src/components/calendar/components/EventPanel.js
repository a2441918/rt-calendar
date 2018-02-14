import React from 'react';
import uuid from 'node-uuid';
import {connect} from 'react-redux'
import {togglePanel, updateEventName, updateEventTime, updateEventEndTime, updateEventType} from '../../../actions/actionCreators';
import {eventTypes} from '../constants';

/**
 * Action to be dispatched to update the event name
 * @param event
 * @param eventIndex
 * @param dispatch
 */
const updateEvName = (event, eventIndex, dispatch) => {
    const value = event.target.value;
    dispatch(updateEventName(value, eventIndex));
};

/**
 * Action to be dispatched to update the event start time
 * @param event
 * @param eventIndex
 * @param dispatch
 */
const updateEvTime = (event, eventIndex, dispatch) => {
    const value = event.target.value;
    dispatch(updateEventTime(value, eventIndex));
};

/**
 * Action to be dispatched to update the event end time
 * @param event
 * @param eventIndex
 * @param dispatch
 */
const updateEvEndTime = (event, eventIndex, dispatch) => {
    const value = event.target.value;
    dispatch(updateEventEndTime(value, eventIndex));
};

/**
 * Action to be dispatched to update the event type
 * @param event
 * @param eventIndex
 * @param dispatch
 */
const updateEvType = (event, eventIndex, dispatch) => {
	const value = event.target.value;
	dispatch(updateEventType(value, eventIndex));
};

/**
 * Toggle's the panel state for open/close
 * @param event
 * @param selectedDay
 * @param eventIndex
 * @param dispatch
 */
const toggleEventPanel = (event, selectedDay, eventIndex, dispatch) => {
	event.preventDefault();
	dispatch(togglePanel(selectedDay, true, eventIndex));
};

/**
 * Function that populates start time
 * @returns {Array}
 */
const populateTime = () => {
    let timeArray = [], i, j;
    for(i=7; i<19; i++) {
        for(j=0; j<4; j++) {
            timeArray.push(i + ":" + (j===0 ? "00" : 15*j) );
        }
    }

    return timeArray;
};

/**
 * Function that populates end time
 * @returns {Array}
 */
const populateEndTime = () => {
    let timeArray = [], i, j;
    for(i=7; i<19; i++) {
        for(j=0; j<4; j++) {
            timeArray.push(i + ":" + (j===0 ? "00" : 15*j));
        }
    }
	timeArray.shift();
    return timeArray;
};

/**
 * The main event panel component which is displayed as a modal
 * @param dayData
 * @param dispatch
 * @returns {*}
 * @constructor
 */
let EventPanel = ({dayData, dispatch}) => {
	const {events, selectedDay} = dayData;
	const eventIndex = events[selectedDay.format('DD-MM-YYYY')].length - 1;
	const event = events[selectedDay.format('DD-MM-YYYY')];
	const evName = event[eventIndex].eventName || '';
	const evTime = event[eventIndex].eventTime || '';
	const evEndTime = event[eventIndex].eventEndTime || '';
	const evType = event[eventIndex].eventType || 'Select a type';
	return (
		<form>
			<div className="eventCard centered">
			  <div className="eventCardForm">
					<div className="eventCardFormRow">
						<label className="eventCardFormLabel">Event Name:</label>
						<input className="eventCardFormInputBox" name="name" type="text" value={evName} onChange={(event) => updateEvName(event, eventIndex, dispatch)}/>
					</div>
				  <div className="eventCardFormRow">
					  <label className="eventCardFormLabel">Time Start:</label>
					  <select className="eventCardFormInput"
							  name="datetime"
							  value={evTime}
							  onChange={(event) => updateEvTime(event, eventIndex, dispatch)}>
                      {populateTime().map((evTime) => <option key={uuid.v4()} value={evTime}>{evTime}</option>)}
                      </select>
				  </div>
				  <div className="eventCardFormRow">
					  <label className="eventCardFormLabel">Time End:</label>
					  <select className="eventCardFormInput"
							  name="datetime"
							  value={evEndTime}
							  onChange={(event) => updateEvEndTime(event, eventIndex, dispatch)}>
                          {populateEndTime().map((evEndTime) => <option key={uuid.v4()} value={evEndTime}>{evEndTime}</option>)}
					  </select>
				  </div>
				  <div className="eventCardFormRow">
					  <label className="eventCardFormLabel">Type:</label>
					  <select
						  className="eventCardFormInput"
						  value={evType}
						  name="type"
						  onChange={(event) => updateEvType(event, eventIndex, dispatch)}>
						  <option disabled value={"Select a type"}>Select a type</option>
                          {eventTypes.map((evType) => <option key={uuid.v4()} value={evType}>{evType}</option>)}
					  </select>
				  </div>
					<div className="eventCardFormDone">
						<a className="eventCardFormDoneButton button" onClick={(event) => toggleEventPanel(event, selectedDay, eventIndex, dispatch)}>
							Done
						</a>
					</div>
				</div>
			</div>
			<div className="overlay"></div>
		</form>
	);
};

EventPanel = connect()(EventPanel);

export default EventPanel;
