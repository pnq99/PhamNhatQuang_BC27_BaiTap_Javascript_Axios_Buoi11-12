import User from '../models/Users.js';

import { searchUserDataFromQueryApi } from '../models/modelsApi.js';
import { searchInput } from '../services/elements.js';
import { render } from './viewUsers.js';

// search by name
const getSearchedUserData = async (value) => {
  try {
    const searchedUsersData = await searchUserDataFromQueryApi(value);

    const users = searchedUsersData.map(
      (user, i) =>
        (user = new User(
          searchedUsersData[i].id,
          searchedUsersData[i].account,
          searchedUsersData[i].name,
          searchedUsersData[i].password,
          searchedUsersData[i].email,
          searchedUsersData[i].image,
          searchedUsersData[i].lang,
          searchedUsersData[i].role,
          searchedUsersData[i].desc
        ))
    );

    render(users);
  } catch (error) {
    console.log(error);
  }
};

searchInput.addEventListener('keypress', function (event) {
  if (event.key !== 'Enter') return;
  const value = event.target.value;

  getSearchedUserData(value);
});
