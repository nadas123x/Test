import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/indus.png";
import projImg2 from "../assets/img/mark.png";
import projImg3 from "../assets/img/dig.jpg";
import projImg4 from "../assets/img/fin.png";
import projImg5 from "../assets/img/audi.png";
import projImg6 from "../assets/img/jur.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Industrie",
      description: "Acteur intégré de la transformation du phosphate tout au long de la chaîne de valeur.",
      imgUrl: projImg1,
    },
    {
      title: "Digital",
      description: "La transformation digitale d’OCP insuffle un nouveau mindset et introduit des modes de collaboration innovants et disruptifs.",
      imgUrl: projImg2,
    },
    {
      title: "Commercial & Marketing",
      description: "le Groupe OCP détient un tiers des parts du marché  de l’exportation de phosphate, grâce à un contact permanent avec le marché international",
      imgUrl: projImg3,
    },
    {
      title: "Finance",
      description: "Communication et information financière",
      imgUrl: projImg4,
    },
    {
      title: "Audit",
      imgUrl: projImg5,
    },
    {
      title: "Juridique & Corporate Affairs",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Un vaste champ d'opportunités</h2>
                <p>Présent sur l’ensemble de la chaîne de valeur du phosphate, le Groupe OCP couvre à travers toutes ses activités plus de 150 métiers.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Métiers</Nav.Link>
                    </Nav.Item>
                  
                    <Nav.Item>
                      <Nav.Link eventKey="third">Raisons de nous rejoindre</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Au sein du Groupe OCP, vous aurez l’opportunité de vous réaliser en contribuant à une mission noble – « nourrir la terre pour nourrir la planète » –, en vous investissant dans des secteurs d’avenir qui se situent au centre des enjeux mondiaux et apportent des services essentiels à l’humanité. Ce challenge, nous voulons le relever avec vous et pour vous.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
