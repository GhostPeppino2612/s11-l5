import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import { Container, Row } from "react-bootstrap";
import Player from "./components/Player";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <SideBar />
          <MainSection />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
