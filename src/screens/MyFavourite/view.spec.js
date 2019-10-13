import React from 'react';

import {shallow, ShallowWrapper} from 'enzyme';
import {SafeAreaView, Flatlist} from 'react-native';
import MyFavourite from './view';
import {userData} from '../../../mockData';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  users: [userData],
  ...props,
});

describe('MyFavourite', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: any; // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<MyFavourite {...props} />); // no compile-time error
    });

    it('should render with Flatlist with user data', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should render a <SafeAreaView /> with no user data', () => {
      expect(shallow(<MyFavourite />).find(SafeAreaView)).toHaveLength(1);
    });
  });
});
