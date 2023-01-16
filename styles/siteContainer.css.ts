import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { rem } from 'polished';

export const siteContainer = style([
  sprinkles({
    background: 'white',
  }),
  {
    boxShadow: '0 2px 4px 0 #0003, 0 25px 50px 0 #0000001a',
    margin: '130px auto 40px',
    minWidth: `${rem(230)}`,
    maxWidth: `${rem(550)}`,
    position: 'relative',
  },
]);
