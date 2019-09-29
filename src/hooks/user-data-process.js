import {createSelector} from 'reselect';
import {join, values, compose, pick} from 'ramda';
export const getUserDataPolished = createSelector(
  state => state.app.users,
  users =>
    users.map(user => ({
      ...user,
      address: compose(
        join(' '),
        values,
        pick(['street', 'city', 'state']),
      )(user.location),
    })),
);
