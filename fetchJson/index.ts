import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
axios.get(url).then(response => {
    const todoData = response.data as Todo;
    const id = todoData.id;
    const title = todoData.title;
    const completed = todoData.completed;
    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    ID: ${id};
    title: ${title}
    finished: ${completed}
`);
}