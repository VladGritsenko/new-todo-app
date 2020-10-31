import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import AppStore from '../../mobx/AppStore';

const TodoItem = ({ todo }) => {
  const { handleRemove, handleCheckBox } = AppStore;

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          onChange={() => handleCheckBox(todo.id)}
          checked={todo.completed}
          type="checkbox"
          className="toggle"
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`}>
          {todo.text}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={() => handleRemove(todo.id)}
        />
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default observer(TodoItem);
