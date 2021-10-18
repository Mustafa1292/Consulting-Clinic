import React from "react";
import Spray from "../../Icons/spray.png";
import Broom from "../../Icons/broom.png";
import Gloves from "../../Icons/cleaning-gloves.png";
import Mop from "../../Icons/icons8-mop-64.png";
import Sponge from "../../Icons/icons8-sponge-64.png";

import Brush from "../../Icons/icons8-brush-64.png";
import Vacuum from "../../Icons/icons8-vacuum-cleaner-64.png";
import Dusting from "../../Icons/icons8-dusting-64.png";

// import Air_Freshner from "Consulting-Clinic\\src\\Icons\\air-freshener.png";

import Air_Freshner from "../../Icons/air-freshener.png";

import Disinfection from "../../Icons/disinfection.png";
// import DustPan from "../../Icons/dustpan.png";
import Microwave from "../../Icons/microwave.png";
import Soap from "../../Icons/soap.png";
import Squeegee from "../../Icons/squeegee.png";

import "./Animation.css";

const Animation = () => {
  return (
    <div>
      <img className="images" src={Spray} alt="spray" />
      <img className="images" src={Broom} alt="Broom" />
      <img className="images" src={Gloves} alt="Gloves" />
      <img className="images" src={Mop} alt="Mop" />
      <img className="images" src={Sponge} alt="Sponge" />
      <img className="images" src={Brush} alt="Brush" />
      <img className="images" src={Vacuum} alt="Vacuum" />
      <img className="images" src={Dusting} alt="Dusting" />

      <img className="images" src={Air_Freshner} alt="Air_Freshner" />
      <img className="images" src={Disinfection} alt="Disinfection" />
      <img className="images" src={Microwave} alt="Microwave" />
      <img className="images" src={Soap} alt="Soap" />
      <img className="images" src={Squeegee} alt="Squeegee" />
      {/* <img className="images" src={DustPan} alt="DustPan" /> */}
    </div>
  );
};

export default Animation;
