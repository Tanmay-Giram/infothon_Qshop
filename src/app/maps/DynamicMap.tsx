"use client";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L, { icon } from "leaflet";
import "leaflet-routing-machine";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import marker_img from "@/assets/MapMarker.jpg";

const Palace_coordinates = [12.3052, 76.6552];

export function ChangeView({ coords, zoom }) {
  const map = useMap();
  map.setView(coords, zoom);

  var myIcon = L.icon({
    iconUrl: marker_img.src,
    iconSize: [40, 40],
  });

  L.Marker.prototype.options.icon = myIcon;

  L.Routing.control({
    waypoints: [
      L.latLng(coords),
      L.latLng(Palace_coordinates[0], Palace_coordinates[1]),
    ],
  }).addTo(map);

  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 12.3366, lng: 76.6187 });

  return (
    <MapContainer
      center={[geoData.lat, geoData.lng]}
      zoom={20}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={[geoData.lat, geoData.lng]} zoom={16} />
    </MapContainer>
  );
}
