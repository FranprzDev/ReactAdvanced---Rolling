import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export const CardHero = ({ h }) => {

  const estilo = {
    height: "450px"
  };

  return (
    <>
          <Col xs={12} md={6} lg={4}>
            <div className="d-flex justify-content-around border p-1 bg-secondary text-light my-2 flex-nowrap" style={estilo}>
                <div className="d-flex justify-center">
                    <img src={h.url} alt={`Imagen de ${h.superhero}`} className="img-fluid object-fit-cover" />
                </div>
                <div className="text-center w-100">
                    <h2 className="my-2 mt-5 text-dark">{h.superhero}</h2>
                    <h5 className="my-3 mt-4">{h.alter_ego}</h5>
                    <h5 className="my-3">{h.first_appearance}</h5>
                    <Link className="btn btn-success mt-4" to={`/${h.superhero}`}>Ver más...</Link>
                </div>
            </div>
          </Col>
    </>
  );
};