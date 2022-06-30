class User {
  constructor(id, account, name, password, email, image, lang, role, desc) {
    this.id = id || '';
    this.account = account;
    this.name = name;
    this.password = password;
    this.email = email;
    this.image = image;
    this.lang = lang;
    this.role = role;
    this.desc = desc;
  }
}

export default User;
