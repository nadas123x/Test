import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
       <NavLink to="/industrie"> <img src={imgUrl} /> </NavLink>
        <div className="proj-txtx">
        <NavLink to="/industrie"><h4>{title}</h4> </NavLink>  
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
