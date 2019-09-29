import React from 'react';
import {reverse} from 'ramda';
import {useSelector} from 'react-redux';
import {getFavoriteDataPolished} from '../../hooks/user-data-process';
import MyFavouriteView from './view';

const MyFavourite = () => {
  const users = reverse(useSelector(getFavoriteDataPolished));
  return <MyFavouriteView users={users} />;
};
export default MyFavourite;
