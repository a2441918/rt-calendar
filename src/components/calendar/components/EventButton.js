import React from 'react';
import {connect} from 'react-redux'
import {togglePanel} from '../../../actions/actionCreators';

/**
 * Action to be dispatched to toggle the panel
 * @param selectedDay
 * @param dispatch
 */
const toggleEventPanel = (selectedDay, dispatch) => {
	dispatch(togglePanel(selectedDay, false));
};

/**
 * Component that renders the main Add Event Button
 * @param selectedDay
 * @param dispatch
 * @returns {*}
 * @constructor
 */
let EventButton = ({selectedDay, dispatch}) => {
	return (
		<div className="eventButton">
			<button className="button addEventButton" onClick={() => toggleEventPanel(selectedDay, dispatch)}>
				<span>+</span>
			</button>
		</div>
	);
};

EventButton = connect()(EventButton);

export default EventButton;
