"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const ContactMap = () => {
  const center: LatLngExpression = [40.7128, -74.006]; // New York

  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={center}
        zoom={10}
        className="w-full h-full rounded-lg shadow-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
      </MapContainer>
    </div>
  );
};

export default ContactMap;
