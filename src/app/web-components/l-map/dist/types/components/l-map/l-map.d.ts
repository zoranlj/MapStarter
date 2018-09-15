import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class LMap {
    LMapHTMLElement: HTMLElement;
    iconurl: string;
    tilelayer: string;
    locations: string;
    center: string;
    zoom: string;
    handleLocationsChanged(locations: string): void;
    message: EventEmitter;
    LMap: any;
    render();
    componentDidLoad(): void;
    addMarkers(locations: any): void;
}
