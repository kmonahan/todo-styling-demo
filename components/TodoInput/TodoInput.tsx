import React, { useState } from 'react';
import { css } from '@linaria/core';
import { midGray } from '@/styles/variables';

interface TodoInputProps {
  createTodo: (text: string) => void;
}

const TodoInputStyles = css`
  background: #00000001;
  border: none;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  font-size: 1.5rem;
  line-height: 1.4em;
  margin: 0;
  padding: 16px 16px 16px 60px;
  position: relative;
  width: 100%;

  &::placeholder {
    color: ${midGray};
    font-weight: 300;
    font-style: italic;
  }
`;

function TodoInput({ createTodo }: TodoInputProps): JSX.Element {
  const [todoValue, setTodoValue] = useState('');

  const handleBlur = () => {
    if (todoValue !== '') {
      createTodo(todoValue);
      setTodoValue('');
    }
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <input
      placeholder="What needs to be done?"
      value={todoValue}
      onChange={(e) => setTodoValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeydown}
      className={TodoInputStyles}
    />
  );
}

export default TodoInput;
