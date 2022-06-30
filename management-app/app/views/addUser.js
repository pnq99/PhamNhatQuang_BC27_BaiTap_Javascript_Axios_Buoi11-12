import User from '../models/Users.js';
import { getUsersDataFromApi, postUserDataToApi } from '../models/modelsApi.js';

import {
  addButtonMarkup,
  markupContentHandler,
} from '../controllers/controllerMarkup.js';

import { getValueFromInput } from '../services/inputsHandler.js';
import { btnThemNguoiDung } from '../services/elements.js';
import { resetForm } from '../services/resetForm.js';

import { initialUsersList } from './viewUsers.js';
import { checkValidation } from '../services/validation.js';

btnThemNguoiDung.addEventListener('click', function (e) {
  e.preventDefault();

  markupContentHandler('Thêm tài khoản', addButtonMarkup);

  const addUserBtn = document.getElementById('addUserBtn');
  addUserBtn.addEventListener('click', addUser);
});

const addUser = async () => {
  try {
    const action = 'add';
    const { account, name, password, email, image, lang, role, desc } =
      getValueFromInput();

    const isValid = checkValidation(
      account,
      name,
      password,
      email,
      image,
      lang,
      role,
      desc,
      action
    );

    console.log(isValid);

    if (!isValid) return;

    const newUser = new User(
      null,
      account,
      name,
      password,
      email,
      image,
      lang,
      role,
      desc
    );

    postUserDataToApi(newUser).then(function () {
      initialUsersList();
    });

    resetForm();

    return;
  } catch (error) {
    let newErrorMessage = error.message;
    newErrorMessage = 'không nhập được dữ liệu';
    document
      .getElementById('addUserBtn')
      .closest('div').previousElementSibling.innerHTML = newErrorMessage;

    return;
  }
};
