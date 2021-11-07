import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: block;
  color: #495057;
  font-weight: bold;
  font-size: 60px;
  margin-top: 30px;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    margin-top: 5px;
  }
`;

const TopSection = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const Service = () => {
  return (
    <TopSection>
      <Text>
        We <span style={{ color: "#f03e3e" }}> beat </span>the competition
      </Text>
      <Container>
        <PriceCard price={69.99} type={"Basic"} />
        <PriceCard price={99.99} type={"Standard"} />
        <PriceCard price={149.99} type={"Premium"} />
      </Container>
    </TopSection>
  );
};

export default Service;
