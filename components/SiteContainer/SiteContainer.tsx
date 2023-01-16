import styled from '@emotion/styled';
import { white } from '@/styles/variables';
import { rem } from 'polished';

const SiteContainer = styled('div')`
  background: ${white};
  box-shadow: 0 2px 4px 0 #0003, 0 25px 50px 0 #0000001a;
  margin: 130px auto 40px;
  min-width: ${rem(230)};
  max-width: ${rem(550)};
  position: relative;
`;

export default SiteContainer;
