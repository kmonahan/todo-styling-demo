import TodoFooter from '@/components/TodoFooter/TodoFooter';
import { TodoFilter, TodoItem } from '@/pages';
import TodoRow from '@/components/TodoRow/TodoRow';
import {
  todoListItemStyles,
  todoListStyles,
  todoListWrapper,
} from '@/components/TodoList/styles.css';

interface TodoListProps {
  items: TodoItem[];
  updateTodoItem: (item: TodoItem) => void;
  updateFilter: (filter: TodoFilter) => void;
  currentFilter: TodoFilter;
}

function TodoList({
  items,
  updateTodoItem,
  updateFilter,
  currentFilter,
}: TodoListProps): JSX.Element {
  return (
    <>
      <section className={todoListWrapper}>
        <ul className={todoListStyles}>
          {items.map((item) => (
            <li key={item.id} className={todoListItemStyles}>
              <TodoRow item={item} updateTodoItem={updateTodoItem} />
            </li>
          ))}
        </ul>
      </section>
      <TodoFooter
        count={items.length}
        updateFilter={updateFilter}
        currentFilter={currentFilter}
      />
    </>
  );
}

export default TodoList;
