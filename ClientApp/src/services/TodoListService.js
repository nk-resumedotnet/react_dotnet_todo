import axios from 'axios';

export class TodoListService {
  _apiUrl = 'http://localhost:5217/api/todolist';

  getTodoList = async () => {
    console.log('here');

    await axios
      .get(`${this._apiUrl}/GetToDoList`, {
        mode: 'no-cors',
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    // const todoListInfo = await fetch(`${this._apiUrl}/GetToDoList`, {
    //   mode: 'no-cors',
    // });

    // console.log(todoListInfo);

    // if (todoListInfo.ok) {
    //   console.log('all good');
    //   return await todoListInfo.json();
    // }
    // return null;
    //else throw new Error(`Got Error = ${todoListInfo.Error}`);
  };
}

const todoListService = new TodoListService();
export default todoListService;
