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
          <a href="https://www.google.com/maps?client=firefox-b-d&sca_esv=88182c9360e229b5&output=search&q=eurohotel&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjnSuuKZNj-6zieDk_gkn6AKnSLKCogWmTELYC4Vpj6g-WWn00XmA4gGIIJ-PmnKVd3JGlcDfFYJQtIaLnXvVy8hY2CveUcFfF3d27KlT4c6eUcSdLJVOezL04y6ywQmt7be_VPsnZomZkwc1xCKXX9aS0DIkBm3TtOmG1fp-GkXpGCi0w&entry=mc&ved=1t:200715&ictx=111" target="_blank" 
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

  return   <div id="map" className="w-full h-full z-20"></div>

};

export default MapComponent;
