import { css } from '@linaria/core';
import { black, fontStack, gray } from '@/styles/variables';
import { rem } from 'polished';

const globalStyles = css`
  :global() {
    html,
    body {
      margin: 0;
      padding: 0;
    }

    body {
      background: ${gray};
      color: ${black};
      font-family: ${fontStack};
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.4em;
    }

    h1 {
      color: rgba(175, 47, 47, 0.15);
      font-size: ${rem(100)};
      font-weight: 100;
      text-align: center;
      text-rendering: optimizeLegibility;
      width: 100%;
    }

    .page-title {
      box-sizing: border-box;
      position: absolute;
      top: -155px;
    }
  }
`;

export default globalStyles;
