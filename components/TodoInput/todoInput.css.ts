import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

const todoInput = style([
  sprinkles({
    color: {
      placeholder: 'mid-gray',
    },
  }),
  {
    background: '#00000001',
    border: 'none',
    color: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    fontSize: '1.5rem',
    lineHeight: '1.4em',
    margin: 0,
    padding: '16px 16px 16px 60px',
    position: 'relative',
    width: '100%',
    selectors: {
      '&::placeholder': {
        fontWeight: 300,
        fontStyle: 'italic',
      },
    },
  },
]);

export default todoInput;
