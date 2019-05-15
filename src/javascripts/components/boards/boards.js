import boardsData from '../../helpers/data/boards-data';
import util from '../../helpers/util';

let boards = [];

const seePinDiv = (event) => {
  const boardId = event.target.closest('.card').id;
  console.error('button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += '<div class="col-3 p-3">';
    domString += `<div id=${item.id} class="card">`;
    domString += `<h3>${item.name}</h3>`;
    domString += '<button class="btn btn-dark col-3 m-auto see-pins">Pins</button>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardsData.laodBoards()
    .then((response) => {
      const boardsResults = response.data.boards;
      boards = boardsResults;
      domStringBuilder(boards);
    })
    .catch(error => console.error(error));
};

export default { initBoards };
