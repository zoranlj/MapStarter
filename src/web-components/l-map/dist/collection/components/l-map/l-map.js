import L from 'leaflet';
import esri from '../../../node_modules/esri-leaflet/dist/esri-leaflet';
L.esri = esri;
export class LMap {
    constructor() {
        this.layerGroupTiles = L.layerGroup();
        this.layerGroupLocations = L.layerGroup();
    }
    handleLocationsChanged(locations) {
        console.log('l-map handleLocationsChanged');
        this.addMarkers(JSON.parse(locations));
    }
    render() {
        return (h("div", { id: "l-map" }));
    }
    componentDidLoad() {
        console.log('l-map componentDidLoad');
        console.log('l-map tileLayerUrl', this.tileLayerUrl);
        console.log('l-map iconurl', this.iconUrl);
        console.log('l-map locations', this.locations);
        console.log('l-map center', this.center);
        console.log('l-map zoom', this.zoom);
        console.log('l-map min zoom', this.minZoom);
        console.log('l-map max zoom', this.maxZoom);
        const LMapElement = this.LMapHTMLElement.shadowRoot.querySelector('#l-map');
        const tileLayer = L.tileLayer(this.tileLayerUrl);
        const esriTopographic = L.esri.basemapLayer('Topographic');
        const esriStreets = L.esri.basemapLayer('Streets');
        const esriGray = L.esri.basemapLayer('Gray');
        const esriDarkGray = L.esri.basemapLayer('DarkGray');
        const esriShadedRelief = L.esri.basemapLayer('ShadedRelief');
        const esriImagery = L.esri.basemapLayer('Imagery');
        const esriNationalGeographic = L.esri.basemapLayer('NationalGeographic').addTo(this.layerGroupTiles);
        if (this.locations.length) {
            this.addMarkers(JSON.parse(this.locations));
        }
        let esriFeatureLayerStates = L.esri.featureLayer({
            url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0',
            style: function () {
                return { color: '#545454', weight: 1 };
            },
            useCors: false
        });
        this.LMap = L.map(LMapElement, {
            tap: false,
            zoomControl: false,
            minZoom: Number(this.minZoom),
            maxZoom: Number(this.maxZoom),
            maxBounds: [[-90, -180], [90, 180]],
            layers: [this.layerGroupTiles, this.layerGroupLocations, esriFeatureLayerStates],
        })
            .setView(JSON.parse(this.center), Number(this.zoom))
            .on('click', (e) => {
            console.log('l-map component send location message');
            this.message.emit(e.latlng.lat + ', ' + e.latlng.lng);
        });
        const baseMaps = {
            'Custom Tile Layer': tileLayer,
            'Esri Topographic': esriTopographic,
            'Esri Streets': esriStreets,
            'Esri Gray': esriGray,
            'Esri DarkGray': esriDarkGray,
            'Esri ShadedRelief': esriShadedRelief,
            'Esri Imagery': esriImagery,
            'Esri National Geographic': esriNationalGeographic
        };
        const overlayMaps = {
            'Custom Locations': this.layerGroupLocations,
            'Esri States': esriFeatureLayerStates
        };
        L.control.layers(baseMaps, overlayMaps, {
            position: 'bottomright'
        }).addTo(this.LMap);
    }
    addMarkers(locations) {
        const modusLogo = L.icon({
            iconUrl: this.iconUrl,
            iconSize: [30, 30]
        });
        locations.map(latLng => {
            L.marker(latLng, { icon: modusLogo }).addTo(this.layerGroupLocations);
        });
    }
    static get is() { return "l-map"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "center": {
            "type": String,
            "attr": "center"
        },
        "iconUrl": {
            "type": String,
            "attr": "icon-url"
        },
        "LMapHTMLElement": {
            "elementRef": true
        },
        "locations": {
            "type": String,
            "attr": "locations",
            "watchCallbacks": ["handleLocationsChanged"]
        },
        "maxZoom": {
            "type": String,
            "attr": "max-zoom"
        },
        "minZoom": {
            "type": String,
            "attr": "min-zoom"
        },
        "tileLayerUrl": {
            "type": String,
            "attr": "tile-layer-url"
        },
        "zoom": {
            "type": String,
            "attr": "zoom"
        }
    }; }
    static get events() { return [{
            "name": "message",
            "method": "message",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:l-map:**/"; }
}
