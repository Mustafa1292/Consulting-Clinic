import React from "react";
import styled from "styled-components";
import "./Footer.css";
import Facebook from "../../Icons/facebook.png";
import Insta from "../../Icons/instagram.png";
import Twitter from "../../Icons/twitter.png";
import "../Link.css";

import { Link } from "react-scroll";
// import { Link } from "react-router-dom"

// const Container = styled.div`
//   /* display: block; */
// `;

const About = styled.div`
  margin-top: 80px;
  text-align: center;
  line-height: 35px;
  width: 550px;
  height: 300px;
  display: block;
  position: absolute;
`;

const Pages = styled.div`
  /* display: flex; */
  margin-top: 100px;
  text-align: center;
  position: absolute;
  display: block;
  height: 400px;
`;

const Logos = styled.div`
  margin-left: 680px;
  margin-top: 80px;
  height: 50px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 55px;
`;

const Contact = styled.div`
  position: absolute;
  margin-left: 710px;
  margin-top: 300px;
`;

const Service = styled.p`
  text-decoration: none;
`;

const Footer = () => {
  return (
    <>
      <Logos>
        <h1>Follow us on</h1>
        <a href="https://www.facebook.com/threelittlecleaners/">
          <Image src={Facebook} alt="Facebook" target="_blank" />
        </a>
        <a href="https://twitter.com/3littlecleaners?lang=en">
          <Image src={Twitter} alt="Twitter" target="_blank" />
        </a>
        <a href="https://twitter.com/3littlecleaners?lang=en">
          <Image src={Insta} alt="Instagram" target="_blank" />
        </a>
      </Logos>
      <About>
        <h1>About us</h1>
        <p className="about" style={{ color: "whitesmoke" }}>
          Providing cleaning services to Houston, Texas, and surrounding areas.
          We simply LOVE what we do and look forward to bringing our tender love
          and care on every visit. We can't wait to see you soon! By booking
          with Three Little Cleaners, you agree to our terms of service. We
          reserve the right to refuse service to anyone.
        </p>
      </About>

      <Pages className="pages">
        <h1 className="pagesh1">Pages</h1>
        <Link to="home">
          {" "}
          <p className="pagesp">Home</p>{" "}
        </Link>
        <Link to="about">
          <p className="pagesp">About us</p> <br />
        </Link>

        <a href="/schedule">
          <Service className="pagesp">Service</Service>{" "}
        </a>
      </Pages>

      <Contact>
        <h1>Contact</h1>
        <p style={{ color: "whitesmoke" }}>(832) - 439 - 8832</p>
      </Contact>

      {/* <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </>
  );
};

export default Footer;
