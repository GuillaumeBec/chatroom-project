export const TOGGLE = 'TOGGLE';
export const CHANGE = 'CHANGE';
export const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const toggle = () => ({
  type: TOGGLE,
});

export const change = (key, value) => ({
  type: CHANGE,
  key,
  value,
});

export const changeMessageValue = (messageValue) => ({
  type: CHANGE_MESSAGE_VALUE,
  messageValue,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});
