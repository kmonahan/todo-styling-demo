import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const colors = {
  white: '#fff',
  gray: '#f5f5f5',
  'mid-gray': '#e6e6e6',
  black: '#4d4d4d',
  'some-other-gray': '#d9d9d9',
};

const fontStack = {
  primary: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const colorProperties = defineProperties({
  conditions: {
    default: {},
    placeholder: { selector: '&::placeholder' },
  },
  defaultCondition: 'default',
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
  },
});

const fontProperties = defineProperties({
  properties: {
    fontFamily: fontStack,
  },
});

export const sprinkles = createSprinkles(colorProperties, fontProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
