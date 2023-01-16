import { globalStyle } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { rem } from 'polished';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

// globalStyle doesn't work with sprinkles, unfortunately
export const bodyClass = sprinkles({
  background: 'gray',
  color: 'black',
  fontFamily: 'primary',
});

globalStyle('body', {
  fontSize: '0.875rem',
  fontWeight: 300,
  lineHeight: '1.4em',
});

globalStyle('h1', {
  color: 'rgba(175, 47, 47, 0.15)',
  fontSize: `${rem(100)}`,
  fontWeight: 100,
  textAlign: 'center',
  textRendering: 'optimizeLegibility',
  width: '100%',
});

globalStyle('.page-title', {
  boxSizing: 'border-box',
  position: 'absolute',
  top: '-155px',
});
