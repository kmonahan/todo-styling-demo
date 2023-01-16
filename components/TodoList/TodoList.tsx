import TodoFooter from '@/components/TodoFooter/TodoFooter';
import { TodoFilter, TodoItem } from '@/pages';
import TodoRow from '@/components/TodoRow/TodoRow';
import { css } from '@linaria/core';
import { midGray } from '@/styles/variables';

interface TodoListProps {
  items: TodoItem[];
  updateTodoItem: (item: TodoItem) => void;
  updateFilter: (filter: TodoFilter) => void;
  currentFilter: TodoFilter;
}

const TodoListStyles = css`
  border-top: 1px solid ${midGray};
  position: relative;
  z-index: 2;
`;

const ItemsStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-bottom: 1px solid #ededed;
    font-size: 1.5rem;
    position: relative;

    &:last-child {
      border-bottom: none;
    }
  }
`;

function TodoList({
  items,
  updateTodoItem,
  updateFilter,
  currentFilter,
}: TodoListProps): JSX.Element {
  return (
    <>
      <section className={TodoListStyles}>
        <ul className={ItemsStyles}>
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
