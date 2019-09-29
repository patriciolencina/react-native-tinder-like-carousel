import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDataPolished} from '../../hooks/user-data-process';
import {getUserAttempt} from '../../redux/actions/app';
import DashboardView from './view';

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const user = useSelector(getUserDataPolished);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(getUserAttempt());
    }
  }, [dispatch, user]);

  return <DashboardView user={user} />;
};

export default Dashboard;
