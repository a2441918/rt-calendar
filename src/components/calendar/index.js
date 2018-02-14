import React from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';
import moment from 'moment';
import uuid from 'node-uuid';
import Day from './components/Day';
import NextMonthButton from './components/NextMonthButton';
import PreviousMonthButton from './components/PreviousMonthButton';
import EventButton from './components/EventButton';
import EventPanel from './components/EventPanel';
import EventList from './components/EventList';
import getCalendarRanges from './utils';
import './calendar.css';

/**
 * Function that renders the 'Add Event' button
 * @param selectedDay
 * @returns {*}
 */
const renderAddEventButton = (selectedDay) => {
	return (
		<EventButton selectedDay={selectedDay} />
	);
};

/**
 * Function that renders the event list inside the modal after an event is created
 * @param selectedDay
 * @param eventListIsOpen
 * @param events
 * @returns {null}
 */
const renderEventList= (selectedDay, eventListIsOpen, events) => {
	const panel = eventListIsOpen ? <EventList selectedDay={selectedDay} events={events} /> : null;
	return panel;
};


/**
 * Function that renders a modal to create an event
 * @param dayData
 * @returns {null}
 */
const renderEventPanel = (dayData) => {
	const {eventPanelIsOpen} = dayData;
	const panel = eventPanelIsOpen ? <EventPanel dayData={dayData} /> : null;
	return panel;
};

/**
 * Function that renders calendar weeks
 * @param calendarRanges
 * @param selectedDay
 * @param month
 * @param events
 */
const renderCalendarWeeks = (calendarRanges, selectedDay, month, events) => calendarRanges.map((week) => {
	const dayList = [];
	week.by('days', (day) => dayList.push(day));
	return dayList.map((day) => {
		const eventsByDay = events[day.format('DD-MM-YYYY')] || [];
		const dayClasses = classnames({
			'day_muted': day.month() !== month,
			'day_selected': day.format('DD-MM-YYYY') === selectedDay.format('DD-MM-YYYY'),
			'day_today': day.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')
		});

		return (
			<Day
				dayClasses={dayClasses}
				day={day}
				key={uuid.v4()}
				events={eventsByDay} />
		);

	});
});

/**
 * Main component that renders the whole calendar
 * @param calendarData
 * @param dayData
 * @returns {*}
 * @constructor
 */
let Calendar = ({calendarData, dayData}) => {
	const {month, year} = calendarData;
	const {events, selectedDay, eventListIsOpen} = dayData;
	const calendarRanges = getCalendarRanges(year, month);
	const headerText = `${moment().month(month).format("MMMM")} ${year}`;
	const eventsArray = events[selectedDay.format('DD-MM-YYYY')];

	return (
		<div className="calendar">
				<header className="header">
					<PreviousMonthButton month={month} />
					<span className="headerSpan">
						{headerText}
					</span>
					<NextMonthButton month={month} />
				</header>
				<main>
					<section className="section">
						{renderCalendarWeeks(calendarRanges, selectedDay, month, events)}
					</section>
				</main>
				{renderAddEventButton(selectedDay)}
				{renderEventPanel(dayData)}
				{renderEventList(selectedDay, eventListIsOpen, eventsArray)}
		</div>
	);
};

Calendar = connect()(Calendar);

export default Calendar;
