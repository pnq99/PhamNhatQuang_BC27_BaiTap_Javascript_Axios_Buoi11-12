export const markup = (user) => {
  return `
  <tr data-target-id="${user.id}">
    <td>${user.id}</td>
    <td>${user.account}</td>
    <td>${user.password}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.lang}</td>
    <td>${user.role}</td>
    <td>
    <button class="btn btn-primary" data-btn="update" data-toggle="modal" data-target="#myModal">Cập nhật</button>
    <button class="btn btn-danger"  data-btn="del">Xóa</button>
    </td>
  </tr>
`;
};

export const addButtonMarkup = ` 
  <span class="notificationSpan"></span>
  <div>
    <button class="btn btn-success" id="addUserBtn">Thêm</button>
    <button class="btn btn-danger" data-dismiss="modal">Đóng</button>
  </div>
`;

export const updateButtonMarkup = `
<span class="notificationSpan"></span>
<div>
  <button class="btn btn-success" id="updateUserBtn">Cập nhật</button>
  <button class="btn btn-danger" data-dismiss="modal">Đóng</button>
</div>
`;

export const markupContentHandler = (content, markup) => {
  myModal.querySelector('.modal-title').innerHTML = content;
  myModal.querySelector('.modal-footer').innerHTML = markup;
};
