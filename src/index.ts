const express = require('express')
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createTodo, readTodos, getCompletedTodos } from './todosManager';

createConnection().then(async () => {
  const app = express();
  app.get('/create', createTodo);
	app.get('/read', readTodos);
	app.get('/complete', getCompletedTodos)
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
}).catch((error) => console.log(error));