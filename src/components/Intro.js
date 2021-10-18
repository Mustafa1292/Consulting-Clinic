import React from "react";
import styled, { keyframes } from "styled-components";
import Animation from "./Animation/Animation";

import Main from "./Images/Main.jpg";
//import Broom from "../Icons/broom.png";

const Container = styled.div`
  //background-color: #e3fafc;
  overflow: hidden;
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  // left side of the flex container
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 120%;
  }
`;

const Right = styled.div`
  // right side of the flex container
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 40%;
  z-index: 2;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Title = styled.h1`
  //Title
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 45px;
  }
`;

const Desc = styled.p`
  // the description
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
  &:hover {
    font-weight: bold;
    color: black;
    //color: white;
    background-color: #f76707;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  font-weight: bold;
  color: #f0667d;
`;

const ContactText = styled.span`
  margin-top: 5px;
  margin-right: 30px;
  color: green;
`;

const Image = styled.img`
  /* display: flex; */
  width: 450px;
  height: 450px;
  margin-bottom: 25px;
  border-radius: 20px;
`;

const Marquee = keyframes`
  from {
    transform: translateX(-630px);
  }
  to {
    transform: translateX(-50px);
  }
`;
const Icons = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-left: 100px;
  margin-top: 85px;
  z-index: -1;
  animation: ${Marquee} 20s linear infinite;
`;

const Intro = () => {
  return (
    <Container>
      <Icons>
        <Animation />
        {/*try to have animation go inside of left, and fade under the blue section*/}
      </Icons>
      <Left>
        <Title>Your partner in cleaning </Title>
        <Desc>
          Let us improve your quality of life by providing reputable, quality,
          and trustworthy cleaning services. Book your appointment today!
        </Desc>
        <Info>
          <Button>Getting started</Button>
          <Contact>
            <Phone>(832) - 439 - 8832</Phone>
            <ContactText>Feel free to get in touch</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Main}></Image>
      </Right>
    </Container>
  );
};

export default Intro;
