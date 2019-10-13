import React from 'react';

import {shallow, ShallowWrapper} from 'enzyme';
import {SafeAreaView} from 'react-native';
import DashboardView from './view';
import {userData} from '../../../mockData';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  users: [userData],
  moveRight: jest.fn(),
  moveLeft: jest.fn(),
  ...props,
});

describe('DashboardView', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: any; // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<DashboardView {...props} />); // no compile-time error
    });

    it('should match to snapshot', () => {
      expect(shallow(<DashboardView />)).toMatchSnapshot();
    });

    it('should render a <SafeAreaView />', () => {
      expect(wrapper.find(SafeAreaView)).toHaveLength(1);
    });
  });
});
