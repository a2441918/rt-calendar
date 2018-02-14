import React from 'react';
import {connect} from 'react-redux';
import uuid from 'node-uuid';
import {removeEvent, toggleEventList} from '../../../actions/actionCreators';

/**
 * Action to be dispatched to remove an event
 * @param index
 * @param dispatch
 */
const removeEventItem = (index, dispatch) => {
	dispatch(removeEvent(index));
	dispatch(toggleEventList());
	setTimeout(() => {
		dispatch(toggleEventList());
	},0)
};

/**
 * Action to be dispatched to open a event
 * @param event
 * @param dispatch
 */
const openEventList = (event, dispatch) => {
	event.preventDefault(event);
	dispatch(toggleEventList());
};

/**
 * The main event list component which is to be shown after a date is clicked after an event being set
 * Can delete an event here
 * @param selectedDay
 * @param events
 * @param dispatch
 * @returns {*}
 * @constructor
 */
let EventList = ({selectedDay, events, dispatch}) => {
	return (
		<div>
			<div className="centered eventList">
				<table className="eventListTable">
					<thead>
						<tr>
							<th className="eventTableTH">Name</th>
							<th className="eventTableTH">Time</th>
							<th className="eventTableTH">Type</th>
							<th className="eventTableTH"></th>
						</tr>
					</thead>
					<tbody>
						{events.map((item, index) => {
							return (
								<tr key={uuid.v4()}>
									<td className="eventTableTD">{item.eventName}</td>
									<td className="eventTableTD">{item.eventTime} - {item.eventEndTime}</td>
									<td className="eventTableTD">{item.eventType}</td>
									<td className="eventTableTD">
										<button onClick={() => removeEventItem(index, dispatch)}>
											<span>X</span>
										</button>
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
			<div className="eventCardFormDone eventCardTableDone">
				<a className="	eventCardFormDoneButton button" onClick={(event) => openEventList(event, dispatch)}>
					Done
				</a>
			</div>
		</div>
		<div className="overlay"></div>
	</div>
	);
};

EventList = connect()(EventList);

export default EventList;
