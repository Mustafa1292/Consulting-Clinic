import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "./Testimonial.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 1350px; */
`;

const Arrow = styled.div`
  font-size: 100px;
  height: 100vh;
  margin-top: 100px;
  margin-left: 150px;
  margin-right: 150px;
  cursor: pointer;
`;

const Revtext = styled.div`
  /* margin-top: 10px; */
  padding-top: 35px;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  text-align: center;
  font-size: 20px;
  color: black;
  font-weight: lighter;
  line-height: 35px;
`;

const Name = styled.p`
  font-size: 20px;
  color: black;
  margin-top: 35px;
`;

const Review = [
  {
    rev: " Thank you! I am able to comfortably stay in my own place now. You really helped me out this week. ",
    date: "05/17/2020",
    name: "Jocelyn Britton",
    id: 1,
  },
  {
    rev: "Little Cleaners are anything but little. Faira and her team come in with a positive energy and the skill and drive to clean to the fullest. We had a deep clean and I don't think my home has been cleaner in years. I am signing up for twice monthly service. Definitely a strong recommend!!",
    date: "12/15/2021",
    name: "Terri King",
    id: 2,
  },
  {
    rev: " I have had my carpet cleaned two times in the past 6 months and just now when Jesus sent them my way I feel I have a new place again!! They will definitely be my on call moving forward thanks a lot!",
    date: "01/09/2021",
    name: "Weekend guests at our client's ",
    id: 3,
  },
  {
    rev: "Faira and her team did an amazing job and I will use her again and definitely recommend. ",
    date: "02/16/2020",
    name: "TAE",
    id: 4,
  },
];

const Text = styled.p`
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  margin-top: 65px;
  color: #228be6;
  /* #ffd43b */
`;

const TesDel = () => {
  const [counter, Setcounter] = useState(0);

  const Slider_right = () => {
    Setcounter(counter === Review.length - 1 ? 0 : counter + 1);
  };

  const Slider_left = () => {
    Setcounter(counter === 0 ? Review.length - 1 : counter - 1);
  };

  return (
    <>
      <Text>
        {/* #fab005 */}
        What our <span style={{ color: "#4dabf7" }}> Customers </span> say about
        us
      </Text>
      <div>
        <Wrapper className="card">
          <Arrow onClick={Slider_right}>{"<"}</Arrow>
          {Review.map((revs, index) => {
            return (
              <Revtext keys={Review.id}>
                {index === counter && (
                  <p>
                    {revs.rev}{" "}
                    <Name>
                      <em className="nameDate">{revs.name}</em> <br />
                      <em className="nameDate">{revs.date}</em>
                    </Name>
                  </p>
                )}{" "}
                <br />
              </Revtext> //understand this logic***
            );
          })}
          <Arrow onClick={Slider_left}>{">"}</Arrow>
        </Wrapper>
      </div>
    </>
  );
};

export default TesDel;
