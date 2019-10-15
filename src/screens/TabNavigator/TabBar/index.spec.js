import React from 'react';

import {shallow, ShallowWrapper} from 'enzyme';
import TabBar from './index';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('TabBar', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: any; // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<TabBar {...props} />); // no compile-time error
    });

    it('should render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
