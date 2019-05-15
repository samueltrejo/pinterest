import boardsData from '../../helpers/data/boards-data';
import util from '../../helpers/util';

let boards = [];

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += '<div class="w-25 p-3">';
    domString += `<div id=${item.id} class="card"><h3>${item.name}</h3></div>`;
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
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
