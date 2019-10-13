import React from 'react';
import DraggableView from './DraggableView';
import {shallow, ShallowWrapper} from 'enzyme';
import {Animated} from 'react-native';

const createTestProps = (props: Object) => ({
  ...props,
});

describe('DraggableView', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: any; // use type "any" to opt-out of type-checking
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<DraggableView {...props} />); // no compile-time error
    });

    it('should match to snapshot', () => {
      expect(shallow(<DraggableView />)).toMatchSnapshot();
    });

    it('should render a <Animated />', () => {
      expect(wrapper.find(Animated.View)).toHaveLength(1); // SUCCESS
    });
  });
});
