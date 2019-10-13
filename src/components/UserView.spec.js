import React from 'react';
import {shallow} from 'enzyme';
import UserView from './UserView';

describe('UserView', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      expect(shallow(<UserView />)).toMatchSnapshot();
    });
  });
});
