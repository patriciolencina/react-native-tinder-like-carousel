import * as actions from './app';
import Types from '../types/app';
import {userData} from '../../../utils';
describe('actions', () => {
  it('should create an action to add a Favorite', () => {
    const user = userData;
    const expectedAction = {
      type: Types.ADD_TO_FAVORITE,
      user,
    };
    expect(actions.addToFavorite(user)).toEqual(expectedAction);
  });
});
