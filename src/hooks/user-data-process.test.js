import {last} from 'ramda';
import {userData} from '../../mockData';
import {
  getUserDataPolished,
  getFavoriteDataPolished,
} from './user-data-process';
const expectedUserData = {
  gender: 'male',
  name: {
    title: 'mr',
    first: 'reginald',
    last: 'burton',
  },
  location: {
    street: '5668 andreas ave',
    city: 'duncanville',
    state: 'iowa',
    zip: '69310',
  },
  email: 'reginald.burton77@example.com',
  username: 'beautifultiger643',
  password: 'calgary',
  salt: 'o50omLUi',
  md5: '59f4e2db81840e41eaa1b2d39f2ead55',
  sha1: 'f1d65fd8f818137c5bc3f4bc147bb8ea109d5867',
  sha256: 'b5a525ca0e449c81029829d7b7eca752fce49b696c58363b9e36cfd272f18e5f',
  registered: '1246053519',
  dob: '144374909',
  phone: '(712)-125-8909',
  cell: '(899)-446-4844',
  SSN: '707-51-3358',
  picture: 'http://api.randomuser.me/portraits/men/61.jpg',
  address: '5668 andreas ave duncanville iowa',
  fullname: 'mr reginald burton',
};
describe('user data process testing', () => {
  it('getUserDataPolished should return with address, fullname', async () => {
    expect.assertions(2);
    const actualUserData = last(
      getUserDataPolished({app: {users: [userData]}}),
    );
    expect(actualUserData).toEqual(expectedUserData);
    const actualFavoriteUserData = last(
      getFavoriteDataPolished({app: {favorite: [userData]}}),
    );
    expect(actualFavoriteUserData).toEqual(expectedUserData);
  });
});
