import React from "react";
import styled from "styled-components";

import Main from "./Images/Main.jpg";

const Container = styled.div`
  //background-color: #e3fafc;
  overflow: hidden;
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  // left side of the flex container
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  // right side of the flex container
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 40%;
`;

const Title = styled.h1`
  //Title
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  // the description
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 50px;
  border-radius: 20px;
`;

const Intro = () => {
  return (
    <Container>
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
