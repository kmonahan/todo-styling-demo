import { TodoItem } from '@/pages';
import todoRowStyles from './TodoRow.module.scss';
import clsx from 'clsx';

interface TodoRowProps {
  item: TodoItem;
  updateTodoItem: (item: TodoItem) => void;
}

function TodoRow({ item, updateTodoItem }: TodoRowProps): JSX.Element {
  const toggleTodo = () => {
    updateTodoItem({
      id: item.id,
      text: item.text,
      isComplete: !item.isComplete,
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleTodo}
        className={todoRowStyles.input}
      />
      <label
        className={clsx(
          todoRowStyles.label,
          item.isComplete && todoRowStyles['label--completed']
        )}
      >
        {item.text}
      </label>
    </div>
  );
}

export default TodoRow;
