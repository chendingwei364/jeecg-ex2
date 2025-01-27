import { CzmESVisualObject } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main/esobjs/base';
import { CzmImagery, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { ESImageryLayer } from '../../objs';
export declare class CzmESImageryLayer extends CzmESVisualObject<ESImageryLayer> {
    static readonly type: void;
    private _czmImagery;
    get czmImagery(): CzmImagery;
    constructor(sceneObject: ESImageryLayer, czmViewer: CzmViewer);
    flyTo(duration: number | undefined, id: number): boolean;
    flyIn(duration: number | undefined, id: number): boolean;
}
