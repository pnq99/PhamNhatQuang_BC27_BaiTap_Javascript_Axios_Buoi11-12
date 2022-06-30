export const resetForm = () => {
  document.getElementById('TaiKhoan').value = '';
  document.getElementById('HoTen').value = '';
  document.getElementById('MatKhau').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('HinhAnh').value = '';
  document.getElementById('loaiNgonNgu').value = '';
  document.getElementById('loaiNguoiDung').value = '';
  document.getElementById('MoTa').value = '';

  $('#myModal').modal('hide');
};
