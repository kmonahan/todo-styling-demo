import TodoFooter from '@/components/TodoFooter/TodoFooter';
import { TodoFilter, TodoItem } from '@/pages';
import TodoRow from '@/components/TodoRow/TodoRow';
import todoListStyles from './TodoList.module.scss';

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
      <section className={todoListStyles['todo-list']}>
        <ul className={todoListStyles['todo-list__items']}>
          {items.map((item) => (
            <li key={item.id}>
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
