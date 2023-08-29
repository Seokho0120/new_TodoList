import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  // state를 함수로 넣어주면, 기억하고 있는 값이 있을 경우 다시 호출되지 않는다. 8.21 강의 다시 들어보기

  // const [todos, setTodos] = useState([
  //   { id: '123', text: '장보기', status: 'active' },
  //   { id: '124', text: '공부하기', status: 'active' },
  // ]);

  // const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);

    // const updateTodoList = [...todos, todo];
    // localStorage.setItem('todos', JSON.stringify(updateTodoList));
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));

    // const updateTodoList = [...todos, updatedTodo];
    // localStorage.setItem('todos', JSON.stringify(updateTodoList));
  };

  const handleDelete = (deletedTodo) => {
    setTodos(todos.filter((t) => t.id !== deletedTodo.id));
    // const updateTodoList = [...todos, deletedTodo];
    // localStorage.setItem('todos', JSON.stringify(updateTodoList));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  // }, []);

  const filtered = getFilteredItems(todos, filter);

  function getFilteredItems(todos, filter) {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  }

  function readTodosFromLocalStorage() {
    console.log('~~~~~~~~~~');

    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  }

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
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
