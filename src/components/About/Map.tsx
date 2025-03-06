import './Map.css'

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map").setView([49.835671, 24.041123], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 50,
    }).addTo(map);

    const customIcon = L.divIcon({
        className: "custom-leaflet-icon", 
        html: `<div class="marker-container">
                 <i class="marker-icon"></i>
               </div>`,
        iconSize: [30, 30], 
        iconAnchor: [15, 30], 
      });
    L.marker([49.835761, 24.041123], { icon: customIcon }).addTo(map);

    const googleMapsButton = L.Control.extend({
      options: { position: "topright" },

      onAdd: () => {
        const div = L.DomUtil.create("div", "google-maps-button");
        div.innerHTML = `
          <a href="https://www.google.com.ua/maps/place/Imperium+Massage/@50.0815915,14.4436222,17z/data=!4m15!1m8!3m7!1s0x470b949bb670f68b:0x1cf1dc06140e9442!2zS3ViZWzDrWtvdmEgOTc2LzMsIDEzMCAwMCBQcmFoYSAzLcW9acW-a292LCDQp9C10YXQuNGP!3b1!8m2!3d50.0815881!4d14.4461971!16s%2Fg%2F11c1ywyg4x!3m5!1s0x470b950006540d31:0xb3b02a684a5d9842!8m2!3d50.0815515!4d14.4461776!16s%2Fg%2F11wpp88zvc?hl=cz&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" 
            style="background: white; padding: 5px 10px; text-decoration: none; color: black; border: 1px solid #ccc; border-radius: 4px;">
            Open in Google Maps
          </a>`;
        return div;
      },
    });

    map.addControl(new googleMapsButton());

    return () => {
      map.remove();
    };
  }, []);

  return   <div id="map" className="w-full h-full  z-20"></div>

};

export default MapComponent;
