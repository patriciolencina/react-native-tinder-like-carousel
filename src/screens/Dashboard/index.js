import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {reverse} from 'ramda';
import {getUserDataPolished} from '../../hooks/user-data-process';
import {getUserAttempt, addToFavorite} from '../../redux/actions/app';
import DashboardView from './view';

const Dashboard = () => {
  const users = reverse(useSelector(getUserDataPolished));
  const dispatch = useDispatch();
  const moveLeft = () => {
    dispatch(getUserAttempt());
  };
  const moveRight = user => {
    dispatch(addToFavorite(user));
    dispatch(getUserAttempt());
  };

  useEffect(() => {
    for (let index = 0; index < 5 - users.length; index++) {
      dispatch(getUserAttempt());
    }
  }, [dispatch, users]);

  return (
    <DashboardView users={users} moveLeft={moveLeft} moveRight={moveRight} />
  );
};

export default Dashboard;
