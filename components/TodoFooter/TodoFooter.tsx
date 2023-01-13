import { TodoFilter } from '@/pages';
import todoFooterStyles from './TodoFooter.module.scss';
import clsx from 'clsx';

interface TodoFooterProps {
  count: number;
  updateFilter: (filter: TodoFilter) => void;
  currentFilter: TodoFilter;
}

function TodoFooter({
  count,
  updateFilter,
  currentFilter,
}: TodoFooterProps): JSX.Element {
  return (
    <footer className={todoFooterStyles.footer}>
      <span className={todoFooterStyles.count}>
        {count} {count === 1 ? 'item' : 'items'} left
      </span>
      <ul className={todoFooterStyles.filters}>
        <li>
          <button
            onClick={() => updateFilter(TodoFilter.All)}
            className={clsx(
              todoFooterStyles.button,
              currentFilter === TodoFilter.All &&
                todoFooterStyles['button--selected']
            )}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => updateFilter(TodoFilter.Active)}
            className={clsx(
              todoFooterStyles.button,
              currentFilter === TodoFilter.Active &&
                todoFooterStyles['button--selected']
            )}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => updateFilter(TodoFilter.Completed)}
            className={clsx(
              todoFooterStyles.button,
              currentFilter === TodoFilter.Completed &&
                todoFooterStyles['button--selected']
            )}
          >
            Completed
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default TodoFooter;
