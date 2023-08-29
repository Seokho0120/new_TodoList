import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updatedTodo) => {
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
  };

  const handleDelete = (deletedTodo) =>
    setTodos(todos.filter((t) => t.id !== deletedTodo.id));

  const filtered = getFilteredItems(todos, filter);

  function getFilteredItems(todos, filter) {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  }

  return (
    <section>
      <ul>
        {filtered.map((item) => (
          // {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

export default TodoList;
