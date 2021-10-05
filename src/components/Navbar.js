import React from "react";
import styled from "styled-components";

const Container = styled.div`
  //the flex container
  height: 50px;
`;

const Wrapper = styled.div`
  //adds padding, makes the display flex
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  //Will take 60% of the navbar left side
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  //company name or the logo image
  font-size: 36px;
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  //The different options on the navbar
  display: flex;
  list-style: none; //removes the bullet points
`;
const MenuItem = styled.li`
  // indivdual list items
  margin-right: 30px;
  font-weight: bold;
  font-size: 20px;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  background-color: crimson;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Three Little Cleaners</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
