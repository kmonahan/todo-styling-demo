import { TodoItem } from '@/pages';

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
      <input type="checkbox" checked={item.isComplete} onChange={toggleTodo} />
      <label>{item.text}</label>
    </div>
  );
}

export default TodoRow;
