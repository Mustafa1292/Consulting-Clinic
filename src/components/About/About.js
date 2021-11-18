import React from "react";
import styled from "styled-components";
import "./About.css";
import "../Link.css";

const Container = styled.div`
  height: 100vh;
`;

const Heading = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 110px;
  margin-left: 590px;
  font-size: 60px;
  z-index: 1;
  color: #228be6;
  font-weight: bold;
`;

const Text = styled.div`
  position: absolute;
  margin-left: 185px;
  margin-top: 290px;
  padding-left: 100px;
  padding-right: 130px;
  font-size: 32px;
  text-align: center;
  line-height: 65px;
`;

const ShapeL = styled.div`
  height: 60%;
  width: 45%;
  background-color: #e3fafc;
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  margin: 0;
  position: absolute;
`;

const ShapeR = styled.div`
  margin-top: 384px;
  margin-left: 742px;
  position: absolute;
  height: 55%;
  width: 50%;
  background-color: #e3fafc;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
`;

function About() {
  return (
    <Container id="about">
      <Heading> Who are we </Heading>
      <Text className="Card1">
        Three Little Cleaners was founded in the summer of 2018 after the loss
        of our Grandmother Lula. We have a mission to provide quality cleaning
        services and bring tender love and care to each client’s home. When the
        other guys rush, we take our time!
      </Text>
      <ShapeL />
      <ShapeR />
    </Container>
  );
}

export default About;
