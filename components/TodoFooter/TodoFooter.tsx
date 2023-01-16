import { TodoFilter } from '@/pages';
import { css } from '@linaria/core';
import { midGray } from '@/styles/variables';
import buttonReset from '@/styles/buttonReset';
import { styled } from '@linaria/react';

interface TodoFooterProps {
  count: number;
  updateFilter: (filter: TodoFilter) => void;
  currentFilter: TodoFilter;
}

const FooterStyles = css`
  border-top: 1px solid ${midGray};
  color: #777;
  height: 20px;
  text-align: center;
  padding: 10px 15px;

  &::before {
    box-shadow: 0 1px 1px #0003, 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px #0003,
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px #0003;
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

const ItemCountStyles = css`
  float: left;
  text-align: left;
`;

const Filters = css`
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

interface FooterButtonsProps {
  isSelected: boolean;
}

const FooterButtons = styled.button<FooterButtonsProps>`
  ${buttonReset};
  border: 1px solid
    ${(props) => (props.isSelected ? '#af2f2f33' : 'transparent')};
  border-radius: 3px;
  box-sizing: content-box;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
`;

function TodoFooter({
  count,
  updateFilter,
  currentFilter,
}: TodoFooterProps): JSX.Element {
  return (
    <footer className={FooterStyles}>
      <span className={ItemCountStyles}>
        {count} {count === 1 ? 'item' : 'items'} left
      </span>
      <ul className={Filters}>
        <li>
          <FooterButtons
            onClick={() => updateFilter(TodoFilter.All)}
            isSelected={currentFilter === TodoFilter.All}
          >
            All
          </FooterButtons>
        </li>
        <li>
          <FooterButtons
            onClick={() => updateFilter(TodoFilter.Active)}
            isSelected={currentFilter === TodoFilter.Active}
          >
            Active
          </FooterButtons>
        </li>
        <li>
          <FooterButtons
            onClick={() => updateFilter(TodoFilter.Completed)}
            isSelected={currentFilter === TodoFilter.Completed}
          >
            Completed
          </FooterButtons>
        </li>
      </ul>
    </footer>
  );
}

export default TodoFooter;
