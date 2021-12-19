import React from "react";

import traveler from "../assets/images/ic_traveler.svg";
import cities from "../assets/images/ic_cities.svg";
import treasures from "../assets/images/ic_treasure.svg";
import picture from "../assets/images/picture.jpg";
import frame from "../assets/images/frame.jpg";
import Button from "../elements/Button";
import numberFormat from "../utils/NumberingFormat";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1
            className="font-weight-bold line-height-1 mb-3"
            style={{ fontSize: 42, lineHeight: "63px", marginTop: -100 }}
          >
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-5 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410, marginTop: 50 }}>
            <img
              src={picture}
              alt="Room With Couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={frame}
              alt="Frame Room With Couches"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: -50 }}>
        <div className="col-auto">
          <img src={traveler} alt={`${props.data.travelers} Travelers`} />
          <h6 className="mt-3">
            {numberFormat(props.data.travelers)}
            <span className="text-gray-500 font-weight-light">Travelers</span>
          </h6>
        </div>
        <div className="col-auto" style={{ marginLeft: 35 }}>
          <img src={treasures} alt={`${props.data.treasures} Treasure`} />
          <h6 className="mt-3">
            {numberFormat(props.data.treasures)}
            <span className="text-gray-500 font-weight-light"> Treasures</span>
          </h6>
        </div>
        <div className="col-auto" style={{ marginLeft: 35 }}>
          <img src={cities} alt={`${props.data.cities} Cities`} />
          <h6 className="mt-3">
            {numberFormat(props.data.cities)}
            <span className="text-gray-500 font-weight-light"> Cities</span>
          </h6>
        </div>
      </div>
    </section>
  );
}
