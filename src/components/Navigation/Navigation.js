import React from 'react';
import styled from 'styled-components';

const Navigation = () => (
  <Wrapper>
    <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
  </Wrapper>
);

export default Navigation;

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
`;
