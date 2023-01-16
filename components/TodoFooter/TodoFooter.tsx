import { TodoFilter } from '@/pages';
import styled from '@emotion/styled';
import { gray, midGray } from '@/styles/variables';
import buttonReset from '@/styles/buttonReset';

interface TodoFooterProps {
  count: number;
  updateFilter: (filter: TodoFilter) => void;
  currentFilter: TodoFilter;
}

interface TodoButtonProps {
  isSelected: boolean;
}

const TodoFooterStyled = styled('footer')`
  border-top: 1px solid ${midGray};
  color: #777;
  height: 20px;
  text-align: center;
  padding: 10px 15px;
  &::before {
    box-shadow: 0 1px 1px #0003, 0 8px 0 -3px ${gray}, 0 9px 1px -3px #0003,
      0 16px 0 -6px ${gray}, 0 17px 2px -6px #0003;
    bottom: 0;
    content: '';
    display: block;
    height: 50px;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
  }
`;

const TodoCount = styled('span')`
  float: left;
  text-align: left;
`;

const TodoFilters = styled('ul')`
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  li {
    display: inline;
  }
`;

const TodoButton = styled('button')<TodoButtonProps>`
  ${buttonReset};
  border: 1px solid
    ${(props) => (props.isSelected ? '#af2f2f33' : 'transparent')};
  border-radius: 3px;
  box-sizing: content-box;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;

  &:hover {
    border-color: #af2f2f1a;
  }
`;

function TodoFooter({
  count,
  updateFilter,
  currentFilter,
}: TodoFooterProps): JSX.Element {
  return (
    <TodoFooterStyled>
      <TodoCount>
        {count} {count === 1 ? 'item' : 'items'} left
      </TodoCount>
      <TodoFilters>
        <li>
          <TodoButton
            onClick={() => updateFilter(TodoFilter.All)}
            isSelected={currentFilter === TodoFilter.All}
          >
            All
          </TodoButton>
        </li>
        <li>
          <TodoButton
            onClick={() => updateFilter(TodoFilter.Active)}
            isSelected={currentFilter === TodoFilter.Active}
          >
            Active
          </TodoButton>
        </li>
        <li>
          <TodoButton
            onClick={() => updateFilter(TodoFilter.Completed)}
            isSelected={currentFilter === TodoFilter.Completed}
          >
            Completed
          </TodoButton>
        </li>
      </TodoFilters>
    </TodoFooterStyled>
  );
}

export default TodoFooter;
