import { observable, action, computed } from 'mobx';
import { v4 } from 'uuid';

class Store {
  @observable todos = [];

  @observable title = '';

  @observable activeFilter = 'all';

  @action handleChange = ({ target: { value } }) => {
    this.title = value;
  };

  @action handleSubmit = (event) => {
    event.preventDefault();

    if (this.title.trim().length > 0) {
      const id = v4();

      this.todos = [
        ...this.todos,
        {
          text: this.title,
          completed: false,
          id,
        },
      ];
    }

    this.title = '';
  };

  @action handleCheckBox = (id) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
  };

  @action handleRemove = (id) => {
    this.todos = this.todos.filter(todo => id !== todo.id);
  };

  @action handleActiveFilter = (activeFilter) => {
    this.activeFilter = activeFilter;
  };

  @action handleClearCompleted = () => {
    this.todos = this.todos.filter(todo => !todo.completed);
  };

  @action handleClickAll = () => {
    this.todos = this.todos.some(todo => !todo.completed)
      ? this.todos.map(todo => ({
        ...todo, completed: true,
      }))
      : this.todos.map(todo => ({
        ...todo, completed: !todo.completed,
      }));
  };

  @computed get filteredTodos () {
    switch (this.activeFilter) {
      case 'active':
        return this.todos.filter(todo => !todo.completed);

      case 'completed':
        return this.todos.filter(todo => todo.completed);

      default:
        return this.todos;
    }
  }
}

const todoListStore = new Store();

export default todoListStore;
