import styled from "styled-components";
//import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Footer2 = styled.div`
  height: 60vh;
  background-color: #868e96;
  display: flex;
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
    <Router>
      <Switch>
        <Route exact path="/">
          <Container>
            <Navbar />
            <Intro />
            <Shape />
          </Container>
          <Container>
            <About />
          </Container>
          <Container>
            <Testimonial />
          </Container>
          <Container>
            <Service />
            <ServiceShape />
          </Container>
          <Footer2>
            <Footer />
          </Footer2>
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
