import React from 'react';
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';
import brain from './brain.png';

const Logo = () => (
  <div className="ma4 mt0">
    <Wrapper className="br2 shadow-2">
      <div className="pa3">
        <ImgWrapper src={brain} alt="Logo" />
      </div>
    </Wrapper>
  </div>
);

export default Logo;

const Wrapper = styled(Tilt)`
  height: 150px;
  width: 150px;
  background-color: hsl(167, 52%, 59%);
  background-image: linear-gradient(
    140deg,
    hsl(167deg 52% 59%) 0%,
    hsl(174deg 46% 52%) 11%,
    hsl(179deg 48% 46%) 26%,
    hsl(184deg 54% 42%) 42%,
    hsl(187deg 59% 38%) 56%,
    hsl(191deg 59% 36%) 67%,
    hsl(194deg 56% 33%) 76%,
    hsl(198deg 52% 31%) 84%,
    hsl(202deg 46% 28%) 89%,
    hsl(207deg 41% 25%) 94%,
    hsl(213deg 36% 21%) 97%,
    hsl(220deg 31% 17%) 100%
  );
`;

const ImgWrapper = styled.img`
  padding-top: 5px;
`;
