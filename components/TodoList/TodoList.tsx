import TodoFooter from '@/components/TodoFooter/TodoFooter';
import { TodoFilter, TodoItem } from '@/pages';
import TodoRow from '@/components/TodoRow/TodoRow';

interface TodoListProps {
  items: TodoItem[];
  updateTodoItem: (item: TodoItem) => void;
  updateFilter: (filter: TodoFilter) => void;
}

function TodoList({
  items,
  updateTodoItem,
  updateFilter,
}: TodoListProps): JSX.Element {
  return (
    <>
      <section>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <TodoRow item={item} updateTodoItem={updateTodoItem} />
            </li>
          ))}
        </ul>
      </section>
      <TodoFooter count={items.length} updateFilter={updateFilter} />
    </>
  );
}

export default TodoList;
