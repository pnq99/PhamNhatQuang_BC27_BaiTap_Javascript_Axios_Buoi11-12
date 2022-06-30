export const markup = (user) => {
  return `
  <div class="col-12 col-md-6 col-lg-3 mg-t-16">
    <div class="content-box">
      <div class="content-box__card">
        <div class="card__img">
          <span>
            <img
              src="${user.img}"
              alt="${user.img}"
              class=""
            />
          </span>
        </div>
        <div class="card__separate mg-bt-16"></div>
        <div class="card__content">
          <div class="card__content-heading">
            <span>${user.lang}</span>
          </div>
          <div class="card__content-name">
            <span>${user.name}</span>
          </div>
          <div class="card__content-desc">
            <span>
              ${user.desc}
            </span>
          </div>
        </div>
        <div class="card__separate pd-bt-32"></div>
      </div>
    </div>
  </div>
`;
};
