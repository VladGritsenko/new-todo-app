import React from 'react';
import { observer } from 'mobx-react';

import TodoItem from '../TodoItem/TodoItem';
import AppStore from '../../mobx/AppStore';

const TodoList = () => {
  const { filteredTodos } = AppStore;

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default observer(TodoList);
