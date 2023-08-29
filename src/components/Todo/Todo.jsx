import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  // const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'avtive';

    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  // input과 label을 연결할때 htmlFor와 id를 연결한다. 이때 id와 htmlFor에서 고유한 값을 사용하지 않으면 체크박스를 클릭할때 다른 체크박스가 선택되는 오류가 생김
  // 결론은 고유한 값으로 id와 htmlFor를 설정해야함. -> 새로 만들어지는 todo의 id로 저장
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={todo.id}
        // id='checkbox'
        checked={todo.status === 'completed'}
        onChange={handleChange}
      />
      <label
        className={styles.text}
        // htmlFor='checkbox'
        htmlFor={todo.id}
      >
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
