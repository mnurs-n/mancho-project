import React, {useState} from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerImage from 'leaflet/dist/images/marker-icon.png';
import markerRetinaImage from 'leaflet/dist/images/marker-icon-2x.png';
import shadowImage from 'leaflet/dist/images/marker-shadow.png';

export default function UserLocationMarker() {
    const markerIcon = new Icon({ // 1. Создаем новый экземпляр иконки с заданными параметрами
        className: 'map-marker',
        iconUrl: markerImage,
        iconRetinaUrl: markerRetinaImage,
        shadowUrl: shadowImage,
        iconSize: [25, 41],
        shadowSize: [41, 41],
    }); 

    const [position, setPosition] = useState<LatLng | null>(null); // 2. Создаем состояние для хранения позиции клика пользователя на карте

    const map = useMapEvents({ // 3. Используем хук useMapEvents для отслеживания событий на карте
        click() { // 3.1 проверяем, есть ли позиция у пользователя, если нет, вызываем метод locate()
            if(!position) {
                map.locate();
            }
        },

        locationfound(e) {
            setPosition(e.latlng);

            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return (
        position && (
            <Marker position={position} icon={markerIcon}>
                <Popup>
                    Your Location
                </Popup>
            </Marker>
        )
    )
}