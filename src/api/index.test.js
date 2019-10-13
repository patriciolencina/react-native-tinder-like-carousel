import {has} from 'ramda';
import fetchMock from 'fetch-mock';
import {getUser, urlAPI} from './index';
import {userJSONString} from '../../mockData';
describe('api testing', () => {
  it('get user should return value name in object', async () => {
    expect.assertions(1);
    fetchMock.mock(urlAPI, userJSONString);
    const data = await getUser();
    expect(has('name', data)).toEqual(true);
    fetchMock.restore();
  });
});
