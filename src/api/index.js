import {last} from 'ramda';
const urlAPI = 'https://randomuser.me/api/0.4/?randomapi';

export async function getUser() {
  try {
    const response = await fetch(urlAPI);
    const responseJson = await response.json();
    const results = last(responseJson.results) || {};
    return results.user;
  } catch (error) {
    return error;
  }
}
