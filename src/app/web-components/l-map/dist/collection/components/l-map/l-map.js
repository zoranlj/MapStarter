import L from 'leaflet';
export class LMap {
    handleLocationsChanged(locations) {
        console.log('l-map handleLocationsChanged');
        this.addMarkers(JSON.parse(locations));
    }
    render() {
        return (h("div", { id: "l-map" }));
    }
    componentDidLoad() {
        console.log('l-map componentDidLoad');
        console.log('l-map tilelayer', this.tileLayer);
        console.log('l-map iconurl', this.iconUrl);
        console.log('l-map locations', this.locations);
        console.log('l-map center', this.center);
        console.log('l-map zoom', this.zoom);
        console.log('l-map min zoom', this.minZoom);
        console.log('l-map max zoom', this.maxZoom);
        const LMapElement = this.LMapHTMLElement.shadowRoot.querySelector('#l-map');
        this.LMap = L.map(LMapElement, { minZoom: Number(this.minZoom), maxZoom: Number(this.maxZoom), maxBounds: [[-90, -180], [90, 180]] })
            .setView(JSON.parse(this.center), Number(this.zoom));
        const tilelayer = L.tileLayer(this.tileLayer);
        tilelayer.addTo(this.LMap);
        this.LMap.on('click', (e) => {
            console.log('l-map component send location message');
            this.message.emit(e.latlng.lat + ", " + e.latlng.lng);
        });
        this.addMarkers(JSON.parse(this.locations));
    }
    addMarkers(locations) {
        const modusLogo = L.icon({
            iconUrl: this.iconUrl,
            iconSize: [30, 30]
        });
        let marker;
        locations.map(latLng => {
            marker = L.marker(latLng, { icon: modusLogo });
            marker.addTo(this.LMap);
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
        "tileLayer": {
            "type": String,
            "attr": "tile-layer"
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
