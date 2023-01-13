import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import TodoInput from '@/components/TodoInput/TodoInput';
import TodoList from '@/components/TodoList/TodoList';
import { useMemo, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

enum TodoFilter {
  All,
  Active,
  Completed,
}

export type { TodoItem };
export { TodoFilter };
export default function Home() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<TodoFilter>(TodoFilter.All);
  const todoId = useRef(0);

  const displayedItems: TodoItem[] = useMemo(() => {
    if (filter === TodoFilter.All) {
      return todoItems;
    }
    if (filter === TodoFilter.Active) {
      return todoItems.filter((item) => !item.isComplete);
    }
    return todoItems.filter((item) => item.isComplete);
  }, [todoItems, filter]);

  const addTodoItem = (text: string) => {
    const newItem: TodoItem = {
      id: todoId.current,
      text,
      isComplete: false,
    };
    todoId.current++;
    setTodoItems((prevItems) => [...prevItems, newItem]);
  };

  const updateTodoItem = (updatedItem: TodoItem) => {
    const itemToUpdate = todoItems.findIndex(
      (item) => item.id === updatedItem.id
    );
    if (itemToUpdate > -1) {
      setTodoItems((prevItems) => [
        ...prevItems.slice(0, itemToUpdate),
        updatedItem,
        ...prevItems.slice(itemToUpdate + 1),
      ]);
    }
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <header>
        <h1>todos</h1>
        <TodoInput createTodo={addTodoItem} />
      </header>
      {todoItems.length > 0 && (
        <TodoList
          items={displayedItems}
          updateTodoItem={updateTodoItem}
          updateFilter={setFilter}
        />
      )}
    </>
  );
}
