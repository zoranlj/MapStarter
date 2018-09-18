import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class LMap {
    LMapHTMLElement: HTMLElement;
    iconUrl: string;
    tileLayerUrl: string;
    handleLTileLayerChanged(tileLayerUrl: string): void;
    locations: string;
    center: string;
    zoom: string;
    minZoom: string;
    maxZoom: string;
    handleLocationsChanged(locations: string): void;
    message: EventEmitter;
    LMap: any;
    tileLayer: any;
    render(): any;
    componentDidLoad(): void;
    addMarkers(locations: any): void;
}
