import React from 'react';
import {connect} from 'react-redux'
import {previousMonth} from '../../../actions/actionCreators';

/**
 * Action to be dispatched when the button is clicked
 * @param dispatch
 * @param month
 * @returns {*}
 */
const gotoPreviousMonth = (dispatch, month) => dispatch(previousMonth(month));

/**
 * Component that takes the calendar to the previous month
 * @param month
 * @param dispatch
 * @returns {*}
 * @constructor
 */
let PreviousMonthButton = ({month, dispatch}) => {

	return (
		<button className="previousPage" onClick={() => gotoPreviousMonth(dispatch, month)}>&lt;</button>
	);
};

PreviousMonthButton = connect()(PreviousMonthButton);

export default PreviousMonthButton;
