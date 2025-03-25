import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const position = [-35.1878242, -59.0962589]; // Coordenadas de tu negocio

function MyMap() {
    return (
        <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>¡Aquí está mi negocio!</Popup>
            </Marker>
        </MapContainer>
    );
}

export default MyMap;
