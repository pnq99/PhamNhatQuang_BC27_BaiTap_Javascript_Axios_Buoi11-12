import { tblDanhSachNguoiDung } from '../services/elements.js';

import User from '../models/Users.js';
import { getUsersDataFromApi } from '../models/modelsApi.js';

import { markup } from '../controllers/controllerMarkup.js';
import { delUser } from './delUser.js';
import { selectUser } from './updateUser.js';
import { resetForm } from '../services/resetForm.js';

export const render = (users) => {
  let html = '';
  users.forEach((user) => {
    html += markup(user);
  });

  tblDanhSachNguoiDung.innerHTML = html;
};

export const initialUsersList = async () => {
  try {
    const usersData = await getUsersDataFromApi();

    const users = usersData.map(
      (user, i) =>
        (user = new User(
          usersData[i].id,
          usersData[i].account,
          usersData[i].name,
          usersData[i].password,
          usersData[i].email,
          usersData[i].image,
          usersData[i].lang,
          usersData[i].role,
          usersData[i].desc
        ))
    );

    render(users);

    const delUserBtns = document.querySelectorAll('[data-btn=del]');
    delUserBtns.forEach((delUserBtn) => {
      delUserBtn.addEventListener('click', function (event) {
        delUser(event, users);
      });
    });

    const updateUserBtns = document.querySelectorAll('[data-btn=update]');
    updateUserBtns.forEach((updateUserBtn) => {
      updateUserBtn.addEventListener('click', function (event) {
        selectUser(event, users);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

initialUsersList();
