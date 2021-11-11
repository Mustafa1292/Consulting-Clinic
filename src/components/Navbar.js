import React from "react";
import styled from "styled-components";
import "./Link.css";
import { Link } from "react-scroll";

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
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

const Menu = styled.ul`
  //The different options on the navbar
  display: flex;
  list-style: none; //removes the bullet points
  @media only screen and (max-width: 480px) {
    display: none;
  }
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
    <Container id="home">
      <Wrapper>
        <Left>
          <Logo>Three Little Cleaners</Logo>
          <Menu>
            <Link to="home">
              {" "}
              <MenuItem>Home</MenuItem>{" "}
            </Link>
            <Link to="testimonial">
              {" "}
              <MenuItem>About us</MenuItem>{" "}
            </Link>
            <MenuItem>Services</MenuItem>
            <Link to="home">
              {" "}
              <MenuItem>Contact</MenuItem>{" "}
            </Link>
          </Menu>
        </Left>
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
