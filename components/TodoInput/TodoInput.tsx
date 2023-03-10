import React, { useState } from 'react';

interface TodoInputProps {
  createTodo: (text: string) => void;
}

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
    />
  );
}

export default TodoInput;
