import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 50px;
`;

export default () => ( //{} 였던걸 html이니까 ()로 변경해
    //<div에서 변경
    <Container>
        <span role="img" aria-label="Loading"> ⏰ </span>
    </Container>
);
