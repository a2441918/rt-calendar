const SET_DAY = 'SET_DAY';
const NEXT_MONTH = 'NEXT_MONTH';
const PREVIOUS_MONTH = 'PREVIOUS_MONTH';
const TOGGLE_PANEL = 'TOGGLE_PANEL';
const UPDATE_EVENT_NAME = 'UPDATE_EVENT_NAME';
const UPDATE_EVENT_TYPE = 'UPDATE_EVENT_TYPE';
const UPDATE_EVENT_TIME = 'UPDATE_EVENT_TIME';
const UPDATE_EVENT_ENDTIME = 'UPDATE_EVENT_ENDTIME';
const TOGGLE_EVENT_LIST = 'TOGGLE_EVENT_LIST';
const REMOVE_EVENT = 'REMOVE_EVENT';

/**
 * Action that toggles the event list visibility
 * @param selectedDay
 * @returns {{type: string, selectedDay: *}}
 */
export const toggleEventList = (selectedDay) => {
  return {
    type: TOGGLE_EVENT_LIST,
    selectedDay
  }
};

/**
 * Action to set the day when clicked on
 * @param selectedDay
 * @returns {{type: string, selectedDay: *}}
 */
export const setDay = (selectedDay) => {
  return {
    type: SET_DAY,
    selectedDay
  }
};

/**
 * Action to move forward to next month when button is clicked
 * @param month
 * @returns {{type: string, month: *}}
 */
export const nextMonth = (month) => {
  return {
    type: NEXT_MONTH,
    month
  }
};

/**
 * Action to move forward to previous month when button is clicked
 * @param month
 * @returns {{type: string, month: *}}
 */
export const previousMonth = (month) => {
  return {
    type: PREVIOUS_MONTH,
    month
  }
};

/**
 * Action that toggles the event panel visibility
 * @param selectedDay
 * @param close
 * @param eventIndex
 * @returns {{type: string, selectedDay: *, close: *, eventIndex: *}}
 */
export const togglePanel = (selectedDay, close, eventIndex) => {
  return {
    type: TOGGLE_PANEL,
    selectedDay,
    close,
    eventIndex
  }
};

/**
 * Action to update the event name in event list
 * @param name
 * @param eventIndex
 * @returns {{type: string, name: *, eventIndex: *}}
 */
export const updateEventName = (name, eventIndex) => {
  return {
    type: UPDATE_EVENT_NAME,
    name,
    eventIndex
  }
};

/**
 * Action to update the event start time in event list
 * @param eventTime
 * @param eventIndex
 * @returns {{type: string, eventTime: *, eventIndex: *}}
 */
export const updateEventTime = (eventTime, eventIndex) => {
    return {
        type: UPDATE_EVENT_TIME,
        eventTime,
        eventIndex
    }
};

/**
 * Action to update the event end time in event list
 * @param eventEndTime
 * @param eventIndex
 * @returns {{type: string, eventEndTime: *, eventIndex: *}}
 */
export const updateEventEndTime = (eventEndTime, eventIndex) => {
    return {
        type: UPDATE_EVENT_ENDTIME,
        eventEndTime,
        eventIndex
    }
};

/**
 * Action to update the event type in event list
 * @param eventType
 * @param eventIndex
 * @returns {{type: string, eventType: *, eventIndex: *}}
 */
export const updateEventType = (eventType, eventIndex) => {
  return {
    type: UPDATE_EVENT_TYPE,
    eventType,
    eventIndex
  }
};

/**
 * Action to remove the event in the event list
 * @param eventIndex
 * @returns {{type: string, eventIndex: *}}
 */
export const removeEvent = (eventIndex) => {
  return {
    type: REMOVE_EVENT,
    eventIndex
  }
};
