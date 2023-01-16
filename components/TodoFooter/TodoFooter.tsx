import { TodoFilter } from '@/pages';
import {
  TodoCountStyles,
  TodoFiltersLiStyles,
  TodoFiltersStyles,
  TodoFooterButton,
  TodoFooterButtonOutlineColor,
  TodoFooterStyles,
} from '@/components/TodoFooter/todo-footer.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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
    <footer className={TodoFooterStyles}>
      <span className={TodoCountStyles}>
        {count} {count === 1 ? 'item' : 'items'} left
      </span>
      <ul className={TodoFiltersStyles}>
        <li className={TodoFiltersLiStyles}>
          <button
            className={TodoFooterButton}
            style={
              currentFilter === TodoFilter.All
                ? assignInlineVars({
                    [TodoFooterButtonOutlineColor]: '#af2f2f33',
                  })
                : undefined
            }
            onClick={() => updateFilter(TodoFilter.All)}
          >
            All
          </button>
        </li>
        <li className={TodoFiltersLiStyles}>
          <button
            className={TodoFooterButton}
            style={
              currentFilter === TodoFilter.Active
                ? assignInlineVars({
                    [TodoFooterButtonOutlineColor]: '#af2f2f33',
                  })
                : undefined
            }
            onClick={() => updateFilter(TodoFilter.Active)}
          >
            Active
          </button>
        </li>
        <li className={TodoFiltersLiStyles}>
          <button
            className={TodoFooterButton}
            style={
              currentFilter === TodoFilter.Completed
                ? assignInlineVars({
                    [TodoFooterButtonOutlineColor]: '#af2f2f33',
                  })
                : undefined
            }
            onClick={() => updateFilter(TodoFilter.Completed)}
          >
            Completed
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default TodoFooter;
