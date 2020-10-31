import React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import AppStore from './mobx/AppStore';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

const App = () => {
  const { todos, allTodoIsChecked, handleClickAll } = AppStore;

  return (
    <section className="todoapp">
      <TodoHeader />
      <main className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          checked={allTodoIsChecked}
          onClick={handleClickAll}
        />
        {!!todos.length && (
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
        )}
        <TodoList />
      </main>
      {!!todos.length && <Footer />}
    </section>
  );
};

export default observer(App);
