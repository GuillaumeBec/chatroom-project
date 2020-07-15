export const TOGGLE = 'TOGGLE';
export const CHANGE = 'CHANGE';

export const toggle = () => ({
  type: TOGGLE,
});

export const change = (key, value) => ({
  type: CHANGE,
  key,
  value,
});
