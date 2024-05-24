import React from "react";
import { Button } from "react-bootstrap";
import { useParams, Link} from "react-router-dom";
import { filterNameHero } from "../Constants/functions";

const HeroDetails = () => {

  let { heroe } = useParams()

  heroe = filterNameHero(heroe)

  console.log(heroe)

  return (
      <div className="d-flex justify-content-center align-items-center m-auto">
        <img src={heroe[0]?.url} alt={heroe[0]?.superhero} className="img-fluid w-25" />
        <div className="d-flex flex-column justify-content-between">
          <article className="m-3">
            <h1 className="display-2">{heroe[0]?.superhero}</h1>
            <hr />
            <h2>{heroe[0]?.publisher}</h2>
            <br />
            <p> {heroe[0]?.alter_ego} </p>
            <p> {heroe[0]?.first_appearance} </p>
            <p> {heroe[0]?.characters} </p>
          </article>
          <Link className="mx-auto mb-5 btn" to={"/"}>Regresar</Link>
        </div>
      </div>
  );
};
export default HeroDetails;