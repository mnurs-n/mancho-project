import type { Property } from 'csstype'; // 1. Импорты зависимостей
import {LatLng} from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {useState} from 'react';
import Button from './button.tsx';
import './styles.css';

export default function Map() {

    const [isDark, setDark] = useState(false); // 2. state для хранения текущей темы
    
    const manchoGeo = new LatLng(42.857327, 74.605765); // 3. Сохраняем координаты mancho в переменную
    const mapStyle = { // 4. Создаем объект стилей для карты
        height: '100vh',
        position: 'absolute' as Property.Position,
        width: '100vw',
        'z-index': 0,
    };
    const zoomLevel = 17; // 5. Устанавливаем уровень масштабирования карты в переменную
    const API_KEY = import.meta.env.VITE_CARTO_API_KEY; // 6. Получаем API ключ из переменных окружения

    const darkMapUrl =`https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=${API_KEY}`; // 7. Создаем URL для темной карты с использованием API ключа
    const lightMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; // 8. Создаем URL для светлой карты
    

    return (
     <div className="main"> 
        <Button isDark={isDark} onToggle={() => setDark(prev => !prev)} />
        <MapContainer center={manchoGeo} scrollWheelZoom={true} style={mapStyle} zoom={zoomLevel}> /
            <TileLayer
                url={isDark ? darkMapUrl : lightMapUrl}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
        </div>
    )
} 
