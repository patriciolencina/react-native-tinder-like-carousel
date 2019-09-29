import {createSelector} from 'reselect';
import {join, values, compose, pick} from 'ramda';
export const getUserDataPolished = createSelector(
  state => state.app.user,
  user => ({
    ...user,
    address: compose(
      join(' '),
      values,
      pick(['street', 'city', 'state']),
    )(user.location),
  }),
);
