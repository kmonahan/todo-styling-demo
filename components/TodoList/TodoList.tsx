import TodoFooter from '@/components/TodoFooter/TodoFooter';
import { TodoFilter, TodoItem } from '@/pages';
import TodoRow from '@/components/TodoRow/TodoRow';
import styled from '@emotion/styled';
import { midGray } from '@/styles/variables';

const TodoListWrapper = styled('section')`
  border-top: 1px solid ${midGray};
  position: relative;
  z-index: 2;
`;

const TodoListItems = styled('ul')`
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
      <TodoListWrapper>
        <TodoListItems>
          {items.map((item) => (
            <li key={item.id}>
              <TodoRow item={item} updateTodoItem={updateTodoItem} />
            </li>
          ))}
        </TodoListItems>
      </TodoListWrapper>
      <TodoFooter
        count={items.length}
        updateFilter={updateFilter}
        currentFilter={currentFilter}
      />
    </>
  );
}

export { TodoListWrapper, TodoListItems };
export default TodoList;
