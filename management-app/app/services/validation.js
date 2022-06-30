import { getUsersDataFromApi } from '../models/modelsApi.js';
import {
  accountInput,
  descInput,
  emailInput,
  imageInput,
  langInput,
  nameInput,
  passwordInput,
  roleInput,
} from './elements.js';

const usersData = await getUsersDataFromApi();

const isRequired = (value) => {
  if (!value) {
    return false;
  }
  return true;
};

const accountCheckAdd = (account) => {
  const isAccountExist = usersData.some((user) => user.account === account);
  if (!isRequired(account)) {
    accountInput.nextElementSibling.innerHTML = 'không được để trống';
    return false;
  } else if (isAccountExist) {
    accountInput.nextElementSibling.innerHTML = 'Tài khoản đã được đăng kí';
    return false;
  } else {
    accountInput.nextElementSibling.innerHTML = '';
    return true;
  }
};


const nameCheck = (name) => {
  const namePattern = new RegExp('^[A-Za-z_ ]+$');
  if (!isRequired(name)) {
    nameInput.nextElementSibling.innerHTML = 'Không để trống';
    return false;
  } else if (!namePattern.test(name)) {
    nameInput.nextElementSibling.innerHTML = 'Tên nhân viên phải là chữ';
    return false;
  } else {
    nameInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

const passwordCheck = (password) => {
  const passwordPattern = new RegExp(
    '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$'
  );
  if (!isRequired(password)) {
    passwordInput.nextElementSibling.innerHTML = 'Không được để trống';
    return false;
  } else if (!passwordPattern.test(password)) {
    passwordInput.nextElementSibling.innerHTML =
      'Từ 6-10 ký tự(1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)';
    return false;
  } else {
    passwordInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

const emailCheck = (email) => {
  const emailPattern = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');
  if (!isRequired(email)) {
    emailInput.nextElementSibling.innerHTML = 'Không được để trống';
    return false;
  } else if (!emailPattern.test(email)) {
    emailInput.nextElementSibling.innerHTML = 'Email phải đúng định dạng';
    return false;
  } else {
    emailInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

const imageCheck = (image) => {
  if (!isRequired(image)) {
    imageInput.nextElementSibling.innerHTML = 'Không được để trống';
    return false;
  } else {
    imageInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

const langCheck = (lang) => {
  if (!isRequired(lang)) {
    langInput.nextElementSibling.innerHTML = 'Bạn chưa chọn ngôn ngữ';
    return false;
  } else {
    langInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

const roleCheck = (role) => {
  if (!isRequired(role)) {
    roleInput.nextElementSibling.innerHTML = 'Bạn chưa chọn vai trò thành viên';
    return false;
  } else {
    roleInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

const descCheck = (desc) => {
  if (!isRequired(desc)) {
    descInput.nextElementSibling.innerHTML = 'Bạn chưa nhập mô tả';
    return false;
  } else {
    descInput.nextElementSibling.innerHTML = '';
    return true;
  }
};

export const checkValidation = (
  account,
  name,
  password,
  email,
  image,
  lang,
  role,
  desc,
  action
) => {
  let isValid;

  let accountIsValid;
  if (action === 'add') {
    accountIsValid = accountCheckAdd(account);
    console.log(accountIsValid);
  } else if (action === 'update') {
    console.log(action);
    accountIsValid = accountCheckAdd(account);
  }
  const nameIsValid = nameCheck(name);
  const passIsValid = passwordCheck(password);
  const emailIsValid = emailCheck(email);
  const imageIsValid = imageCheck(image);
  const langIsValid = langCheck(lang);
  const roleIsValid = roleCheck(role);
  const descIsValid = descCheck(desc);

  console.log(accountIsValid);
  if (
    accountIsValid &&
    nameIsValid &&
    passIsValid &&
    emailIsValid &&
    imageIsValid &&
    langIsValid &&
    roleIsValid &&
    descIsValid
  ) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
};
