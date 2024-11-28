import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            // Initialize the map
            const map = L.map('map').setView([26.182467, 91.745934], 13);

            // Save the map instance to mapRef.current
            mapRef.current = map;

            // Set up the OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Create custom Font Awesome icons
            const createIcon = (iconClass) => {
                return L.divIcon({
                    html: `<i class="${iconClass} fa-2x" style="color: #f00;"></i>`,
                    iconSize: [30, 42],
                    className: 'custom-fa-icon',
                });
            };

            // Add markers with Font Awesome icons
            L.marker([26.182563,91.746062], { icon: createIcon('fas fa-map-marker-alt') }).addTo(map)
            .bindPopup(`
                <div>
                    <strong>QOGEANT-BIZZ</strong><br>
                    <a href="https://www.google.com/maps?q=26.182467,91.745934" target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                    </a>
                </div>
            `);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    const mapStyles = {
        width: '80%',
        height: '200px',
        border: '1px solid #ccc',
    };

    return (
        <div>
            <div id="map" style={mapStyles}></div>
        </div>
    );
};

export default Map;