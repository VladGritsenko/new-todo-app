import React from 'react';
import { observer } from 'mobx-react';

import AppStore from '../../mobx/AppStore';

const TodoHeader = () => {
  const { handleSubmit, handleChange, title } = AppStore;

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};

export default observer(TodoHeader);
