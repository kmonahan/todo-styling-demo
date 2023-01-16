import { TodoItem } from '@/pages';
import styled from '@emotion/styled';
import { someOtherGray } from '@/styles/variables';

interface TodoRowProps {
  item: TodoItem;
  updateTodoItem: (item: TodoItem) => void;
}

interface TodoRowLabelProps {
  isComplete: boolean;
}

const INPUT_HEIGHT = 40;

const TodoRowCheckbox = styled('input')`
  background: none;
  border: none;
  bottom: 0;
  height: ${INPUT_HEIGHT}px;
  margin: auto 0;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: ${INPUT_HEIGHT}px;
`;

const TodoRowLabel = styled('label')<TodoRowLabelProps>`
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-position: center left;
  background-repeat: no-repeat;
  display: block;
  line-height: 1.2;
  padding: 15px 15px 15px 60px;
  transition: color 0.4s;

  ${(props) => {
    if (props.isComplete) {
      return `
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
      color: ${someOtherGray};
      text-decoration: line-through;
      `;
    }
  }}
`;

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
      <TodoRowCheckbox
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleTodo}
      />
      <TodoRowLabel isComplete={item.isComplete}>{item.text}</TodoRowLabel>
    </div>
  );
}

export default TodoRow;
