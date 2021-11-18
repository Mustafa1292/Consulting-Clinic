import React from "react";
import styled from "styled-components";
import Service_background from "../Images/Service_background.png";
import HomeLogo from "../Images/Home_Cleaning.png";
import OfficeLogo from "../Images/Office_cleaning.png";
import "./Schedule.css";

const Top = styled.div`
  height: 60vh;
`;

// const Container = styled.div`
//   height: 100vh;
// `;

const Head = styled.img`
  height: 100%;
  width: 33%;
`;

const Button = styled.button`
  background-color: #0c8599;
  height: 180px;
  width: 340px;
  position: absolute;

  left: 38%;
  top: 35%;
  border-radius: 40px;
  color: whitesmoke;
  font-weight: bold;
  font-size: 40px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
`;

const IntroText = styled.div`
  position: absolute;
  margin-top: 120px;
  margin-left: 42%;
`;

const IntroDesc = styled.div`
  position: absolute;
  margin-top: 200px;
  margin-left: 14%;
  font-size: 30px;
  font-weight: 500;
  color: #0c8599;
`;

const Home = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 380px;
  margin-bottom: 15px;
  text-align: center;
  /* position: absolute; */
  line-height: 45px;
  /* font-size: 40px; */
`;

const Image = styled.img`
  height: 330px;
  width: 425px;
  margin-top: 20px;
  /* margin-left: 600px; */
  /* margin-bottom: 20px; */
  /* position: absolute; */
`;

const HomeButton = styled.button`
  background-color: crimson;
  height: 110px;
  width: 140px;
  position: absolute;

  margin-top: 15px;
  margin-left: 25px;
  border-radius: 35px;
  color: whitesmoke;
  font-weight: bold;
  font-size: 30px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
  cursor: pointer;
`;

const TriagngleL = styled.div`
  background-color: #0c8599;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  margin-top: 500px;
  width: 32%;
  height: 32%;
  position: absolute;
`;

const TriagngleR = styled.div`
  background-color: #0c8599;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
  margin-top: 500px;
  margin-left: 1010px;
  width: 32%;
  height: 32%;
  position: absolute;
`;

const Schedule = () => {
  return (
    <>
      <TriagngleL />
      <TriagngleR />

      {/* lee n bader */}
      <Top>
        <a href="/">
          {" "}
          <HomeButton> Home </HomeButton>{" "}
        </a>
        <a
          id="TTE-28d76c76-932f-4a9b-96bf-5dcc140accaa"
          href="https://10to8.com/book/3lcleaners/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="Schedule"> Schedule Today! </Button>
        </a>
        <Head src={Service_background} />
        <Head src={Service_background} />
        <Head src={Service_background} />
      </Top>
      {/* bader n lee */}

      <IntroText>
        <h1 style={{ color: "#e67700", textShadow: "1px 1px" }}>
          Our Services
        </h1>{" "}
      </IntroText>

      <IntroDesc>
        Whether if it's a home or an office or anything in between we have you
        covered
      </IntroDesc>

      <Home>
        <div>
          <h1 style={{ color: "#e67700", textShadow: "1px 1px" }}>Home</h1>
          <Image src={HomeLogo} alt="home" />
          <p className="Desc">
            Who doesn't love to come home to a <br />
            freshly made bed, clutter-free dresser and clean floors!
          </p>
        </div>

        <div>
          <h1 style={{ color: "#e67700", textShadow: "1px 1px" }}>Office</h1>
          <Image src={OfficeLogo} alt="Office" />
          <p className="Desc">
            Dust-free just as we like it! Office area radiate <br /> after
            routine cleaning.
          </p>
        </div>
      </Home>
    </>
  );
};

export default Schedule;
