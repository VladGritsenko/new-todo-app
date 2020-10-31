import React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import AppStore from './mobx/AppStore';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

const App = () => {
  const { todos, handleClickAll } = AppStore;

  return (
    <section className="todoapp">
      <TodoHeader />
      <main className="main" style={{ display: 'block' }}>
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          checked={todos.every(todo => todo.completed)}
          onClick={handleClickAll}
        />
        {!!todos.length && (
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
        )
        }
        <TodoList />
      </main>
      {!!todos.length && <Footer />}
    </section>
  );
};

export default observer(App);
