import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const todoListWrapper = style([
  sprinkles({
    borderColor: 'mid-gray',
  }),
  {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    position: 'relative',
    zIndex: 2,
  },
]);

export const todoListStyles = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const todoListItemStyles = style({
  borderBottom: '1px solid #ededed',
  fontSize: '1.5rem',
  position: 'relative',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});
