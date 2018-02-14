import React from 'react';
import {connect} from 'react-redux'
import {nextMonth} from '../../../actions/actionCreators';

/**
 * Action to be dispatched when the button is clicked
 * @param dispatch
 * @param month
 * @returns {*}
 */
const gotoNextMonth = (dispatch, month) => dispatch(nextMonth(month));

/**
 * Component that takes the calendar to the next month
 * @param month
 * @param dispatch
 * @returns {*}
 * @constructor
 */
let NextMonthButton = ({month, dispatch}) => {

	return (
		<button className="nextPage" onClick={() => gotoNextMonth(dispatch, month)}>&gt;</button>
	);
};

NextMonthButton = connect()(NextMonthButton);

export default NextMonthButton;
