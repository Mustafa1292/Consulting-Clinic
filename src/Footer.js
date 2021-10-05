import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: blue;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};

export default Footer;
