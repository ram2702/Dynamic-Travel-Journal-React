import React from "react";
import "./App.css";
import locn from "./img/location.svg";
export default function MockLoc(props) {
  console.log(props);
  return (
    <div className="item-card">
      <img
        src={props.soloDataSet.imageUrl}
        className="item-card-img"
        alt="Locationimg"
      />
      <div className="item-card-text">
        <div className="item-card-title">
          <img src={locn} className="item-card-title-pin" alt="pin" />
          <h3 className="item-card-title-heading">
            {props.soloDataSet.location}
          </h3>
          <a
            className="item-card-title-link"
            href={props.soloDataSet.googleMapsUrl}
            target="blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="item-card-text-maintitle">{props.soloDataSet.title}</h2>
        <h4 className="item-card-text-date">
          {props.soloDataSet.startDate} - {props.soloDataSet.endDate}
        </h4>
        <p className="item-card-text-desc">{props.soloDataSet.description}</p>
      </div>
      <hr />
    </div>
  );
}
