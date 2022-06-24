import React from "react";
import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 Pokemon">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "nope, not really"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          Abilities ({props.abilities.length}):
        </p>
        <ul className="list-group list-group-flush">
          {props.abilities.map((ability, index) => {
            return (
              <li key={index} className="list-group-item">
                {ability}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
