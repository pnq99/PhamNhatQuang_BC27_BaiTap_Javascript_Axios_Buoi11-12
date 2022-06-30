import { getDataHandler } from './model.js';
import { markup } from './controller.js';

const userRowEls = document.querySelectorAll('.our-team-row');

const usersData = await getDataHandler();

const displayUserFromApi = () => {
  // filter users
  const usersGvRole = usersData.filter((user) => user.role === 'GV');

  if (usersGvRole.length === 0) return;

  let htmlArr = [];
  usersGvRole.forEach((userGvRole) => {
    htmlArr.push(markup(userGvRole));
  });

  const size = 4;
  let splittedHtmlArr = [];
  for (let i = 0; i < htmlArr.length; i += size) {
    const chunk = htmlArr.slice(i, i + size);
    splittedHtmlArr.push(chunk);
  }

  if (splittedHtmlArr[0].length < size) {
    userRowEls[0].innerHTML = splittedHtmlArr[0].join('');
    return;
  }

  userRowEls.forEach((userRowEl, index) => {
    userRowEl.innerHTML = splittedHtmlArr[index].join('');
  });
};

displayUserFromApi();
