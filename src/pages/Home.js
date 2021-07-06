import React, { useState, useEffect } from "react";
import { TileLayer, Marker, Popup, Map } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import "react-calendar/dist/Calendar.css";

function Home() {
  //este state sera chamado caso o pronto ocorra erro de horario incompativel
  //e nessecitar de oma obervacao pra validar
  const [local, setLocal] = useState({lat:0,long:0})
  
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocal({
        ...local,
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, []);

  const custonIcon = new Leaflet.icon({
    iconUrl: icon,
    iconSize: [25, 30],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  

  return (
    <div className="jumbotron">
      <div className="top-table">
        <div>
          <h4>Sistema controle de atividade de ronda</h4>
        </div>
      </div>

      <Map
        center={[local.lat, local.long]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[local.lat, local.long]}
          pane="popupPane"
          icon={custonIcon}
        >
          <Popup>Esta é sua localização atual</Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default Home;
