import React from 'react';
import {shallow} from 'enzyme';
import DraggableView from './DraggableView';

describe('DraggableView', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      expect(shallow(<DraggableView />)).toMatchSnapshot();
    });
  });
});
