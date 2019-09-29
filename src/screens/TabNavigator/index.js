import DashboardScreen from '../Dashboard';
import MyFavouriteScreen from '../MyFavourite';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TabBar from './TabBar';
export default createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
    },
    MyFavourite: {
      screen: MyFavouriteScreen,
    },
  },
  {
    initialRouteName: 'Dashboard',
    tabBarPosition: 'bottom',
    tabBarComponent: TabBar,
    swipeEnabled: true,
    animationEnabled: true,
  },
);
