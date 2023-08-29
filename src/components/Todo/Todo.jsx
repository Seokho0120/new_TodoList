import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  // const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'avtive';

    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        checked={todo.status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{todo.text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
