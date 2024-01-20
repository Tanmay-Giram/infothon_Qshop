"use client";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import marker_img from "@/assets/MapMarker.jpg";

export function ChangeView({ coords, zoom }) {
  const map = useMap();
  map.setView(coords, zoom);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 12.2958, lng: 76.6394 });
  var myIcon = L.icon({
    iconUrl: marker_img.src,
    iconSize: [40, 40],
  });

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
        <Marker position={[geoData.lat, geoData.lng]} icon={myIcon} />
      )}
      <ChangeView coords={[geoData.lat, geoData.lng]} zoom={16} />
    </MapContainer>
  );
}
