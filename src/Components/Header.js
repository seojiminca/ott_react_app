import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";


//styled를 위해 이름을 변경
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex; 
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
  //styled components에서는 $ 로 자바스크립트를 불러온다
  //li자체에 current라는 속성을 등록 
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex; //무조건 1행 수평정렬. 커서 자리가 없으면 크기를 줄여서라도. 
  align-items: center;
  justify-content: center; //수평여백 menu bar에 자주사용. 
`;

export default withRouter(({ location: { pathname }}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));