import { TodoItem } from '@/pages';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { someOtherGray } from '@/styles/variables';

interface TodoRowProps {
  item: TodoItem;
  updateTodoItem: (item: TodoItem) => void;
}

const INPUT_HEIGHT = 40;

const Input = css`
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

interface LabelProps {
  isComplete: boolean;
}

const Label = styled.label<LabelProps>`
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-position: center left;
  background-repeat: no-repeat;
  color: ${(props) => (props.isComplete ? someOtherGray : 'inherit')};
  display: block;
  line-height: 1.2;
  padding: 15px 15px 15px 60px;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
  transition: color 0.4s;

  input:checked + & {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }
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
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleTodo}
        className={Input}
      />
      <Label isComplete={item.isComplete}>{item.text}</Label>
    </div>
  );
}

export default TodoRow;
