import axios from 'axios';

const laodBoards = () => axios.get('../db/boards.json');

export default { laodBoards };
