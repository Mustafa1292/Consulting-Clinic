import styled from "styled-components";
//import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Testemonial from "./components/Testemonial";
import TesDel from "./components/TesDel";
//import Footer from "./Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(100% 0%, 60% 0%, 45% 100%, 100% 100%);
  background-color: #e3fafc;
`;

const ServiceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(0% 0%, 45% 0%, 33% 100%, 0% 100%);
  background-color: #e3fafc;
`;

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Intro />
        <Shape />
      </Container>
      <Container>
        <TesDel />
        {/* <Testemonial /> */}
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>

      {/* <Container>
        <Contact />
        <Footer />
      </Container> */}
    </div>
  );
}

export default App;
