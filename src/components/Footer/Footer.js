import React from "react";
import styled from "styled-components";
import "./Footer.css";

const About = styled.div`
  display: flex;
  margin-top: 70px;
  text-align: center;
  border: 3px solid white;
  line-height: 35px;
  width: 550px;
  height: 300px;
  display: block;
`;
// const Right = styled.div``;

const Footer = () => {
  return (
    <>
      <About className="box">
        <h1>About us</h1>
        <p style={{ color: "#e9ecef" }}>
          Providing cleaning services to Houston, Texas, and surrounding areas.
          We simply LOVE what we do and look forward to bringing our tender love
          and care on every visit. We can't wait to see you soon! By booking
          with Three Little Cleaners, you agree to our terms of service. We
          reserve the right to refuse service to anyone.
        </p>
        <p>social media logos go around here</p>
      </About>
    </>
  );
};

export default Footer;
