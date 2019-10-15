import React from 'react';

import {shallow, ShallowWrapper} from 'enzyme';
import TabBarIcon from './TabBarIcon';

const createTestProps = (props: Object) => ({
  index: 0,
  ...props,
});

describe('TabBarIcon', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: any; // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<TabBarIcon {...props} />); // no compile-time error
    });

    it('should render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
