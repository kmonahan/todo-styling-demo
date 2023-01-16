import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

const INPUT_HEIGHT = 40;

export const todoRowCheckbox = style({
  background: 'none',
  border: 'none',
  bottom: 0,
  height: `${INPUT_HEIGHT}px`,
  margin: 'auto 0',
  opacity: 0,
  position: 'absolute',
  textAlign: 'center',
  top: 0,
  width: `${INPUT_HEIGHT}px`,
});

export const todoRowLabel = style({
  backgroundImage:
    "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E')",
  backgroundPosition: 'center left',
  backgroundRepeat: 'no-repeat',
  display: 'block',
  lineHeight: 1.2,
  padding: '15px 15px 15px 60px',
  transition: 'color 0.4s',
});

export const todoRowLabelComplete = style([
  todoRowLabel,
  sprinkles({
    color: 'some-other-gray',
  }),
  {
    backgroundImage:
      "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E')",
    textDecoration: 'line-through',
  },
]);
