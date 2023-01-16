import { createVar, style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { buttonReset } from '@/styles/buttonReset.css';

export const TodoFooterStyles = style([
  sprinkles({
    borderColor: 'mid-gray',
  }),
  {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    color: '#777',
    height: '20px',
    padding: '10px 15px',
    textAlign: 'center',
    selectors: {
      '&::before': {
        boxShadow:
          '0 1px 1px #0003, 0 8px 0 -3px #f5f5f5, 0 9px 1px -3px #0003,\n' +
          '      0 16px 0 -6px #f5f5f5, 0 17px 2px -6px #0003',
        bottom: 0,
        content: '',
        display: 'block',
        height: '50px',
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
      },
    },
  },
]);

export const TodoCountStyles = style({
  float: 'left',
  textAlign: 'left',
});

export const TodoFiltersStyles = style({
  left: 0,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'absolute',
  right: 0,
});

export const TodoFiltersLiStyles = style({
  display: 'inline',
});

export const TodoFooterButtonOutlineColor = createVar();

export const TodoFooterButton = style([
  buttonReset,
  {
    border: `1px solid ${TodoFooterButtonOutlineColor}`,
    borderRadius: '3px',
    boxSizing: 'content-box',
    color: 'inherit',
    margin: '3px',
    padding: '3px 7px',
    vars: {
      [TodoFooterButtonOutlineColor]: 'transparent',
    },
    ':hover': {
      vars: {
        [TodoFooterButtonOutlineColor]: '#af2f2f1a',
      },
    },
  },
]);
