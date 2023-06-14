import {useEffect, useRef} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import {Tile as TileLayer} from 'ol/layer';
import {OSM} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';
import {Style, Circle as CircleStyle, Fill, Stroke} from 'ol/style';
import {fromLonLat} from 'ol/proj';
import {Feature} from "ol";
import {Point} from "ol/geom";
import {CircularProgress} from "@mui/material";

interface Sensor {
    id: string;
    name: string;
    description: string;
    coordinates: [number, number];
}

const MapComponent = ({ sensor }: { sensor: Sensor }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new Map({
            target: mapRef.current !== null ? mapRef.current : undefined,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat(sensor.coordinates),
                zoom: 13,
            }),
        });

        const sensorLayer = new VectorLayer({
            source: new VectorSource({
                features: [
                    new Feature({
                        geometry: new Point(fromLonLat(sensor.coordinates)),
                    }),
                ],
            }),
            style: new Style({
                image: new CircleStyle({
                    radius: 6,
                    fill: new Fill({color: 'red'}),
                    stroke: new Stroke({
                        color: 'white',
                        width: 2,
                    }),
                }),
            }),
        });

        map.addLayer(sensorLayer);
    }, [sensor.coordinates]);

    return (
        <div ref={mapRef} className="map">
            <CircularProgress className="progress-icon" />
        </div>
    );
};

export default MapComponent;
