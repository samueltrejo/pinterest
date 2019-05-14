import boardsData from '../../helpers/data/boards-data';

const initBoards = () => {
  boardsData.laodBoards()
    .then((response) => {
      console.error(response);
    })
    .catch(error => console.error(error));
};

export default { initBoards };
