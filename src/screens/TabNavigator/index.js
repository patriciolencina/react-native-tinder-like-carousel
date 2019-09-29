import DashboardScreen from '../Dashboard';
import SuperPowersScreen from '../SuperPowers';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TabBar from './TabBar';
export default createMaterialTopTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
    },
    SuperPowers: {
      screen: SuperPowersScreen,
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
