import { updateUserToApi } from '../models/modelsApi.js';
import User from '../models/Users.js';

import {
  markupContentHandler,
  updateButtonMarkup,
} from '../controllers/controllerMarkup.js';

import {
  fillValueToInput,
  getValueFromInput,
} from '../services/inputsHandler.js';
import { resetForm } from '../services/resetForm.js';
import { checkValidation } from '../services/validation.js';

import { initialUsersList } from './viewUsers.js';

const updateUser = async (user) => {
  try {
    const action = 'update';
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

    const updatedUser = new User(
      user.id,
      account,
      name,
      password,
      email,
      image,
      lang,
      role,
      desc
    );

    updateUserToApi(updatedUser).then(() => {
      initialUsersList();
    });
    return;
  } catch (error) {
    let newErrorMessage = error.message;
    newErrorMessage = 'không nhập được dữ liệu';
    document
      .getElementById('updateUserBtn')
      .closest('div').previousElementSibling.innerHTML = newErrorMessage;

    return;
  }
};

export const selectUser = (event, users) => {
  markupContentHandler('Cập nhật người dùng', updateButtonMarkup);
  const updateUserBtn = document.getElementById('updateUserBtn');

  const target = event.target.closest('tr');
  const user = users.find((user) => target.dataset.targetId === user.id);

  fillValueToInput(user);

  updateUserBtn.addEventListener('click', function () {
    updateUser(user);
  });
};
