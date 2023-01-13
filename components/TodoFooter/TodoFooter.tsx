import { TodoFilter } from '@/pages';

interface TodoFooterProps {
  count: number;
  updateFilter: (filter: TodoFilter) => void;
}

function TodoFooter({ count, updateFilter }: TodoFooterProps): JSX.Element {
  return (
    <footer>
      <span>
        {count} {count === 1 ? 'item' : 'items'} left
      </span>
      <ul>
        <li>
          <button onClick={() => updateFilter(TodoFilter.All)}>All</button>
        </li>
        <li>
          <button onClick={() => updateFilter(TodoFilter.Active)}>
            Active
          </button>
        </li>
        <li>
          <button onClick={() => updateFilter(TodoFilter.Completed)}>
            Completed
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default TodoFooter;
