import React from 'react';
import { observer } from 'mobx-react';

import AppStore from '../../mobx/AppStore';

const Footer = () => {
  const {
    todos, handleActiveFilter, activeFilter, handleClearCompleted,
  } = AppStore;
  const { completed } = todos;

  return (
    <footer className="footer" style={{ display: 'block' }}>
      <span className="todo-count">
        {todos.filter(todo => !completed).length}
        {' '}
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => handleActiveFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => handleActiveFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => handleActiveFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      {todos.some(({ completed }) => completed) && (
        <button
          type="button"
          className="clear-completed"
          style={{ display: 'block' }}
          onClick={handleClearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default observer(Footer);
