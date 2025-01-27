import { NativeNumber16Type } from "xbsj-xe2/dist-node/xe2-base-objects";
import { getMinMaxPosition, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { AttributesType, IndexType } from "xbsj-xe2/dist-node/xe2-base-cesium";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { AttributesJsonType, BoundingVolumeJsonType, CzmCustomPrimitiveUniformMapType, CzmPassType, CzmPrimitiveType, IndexJsonType } from "./types";
import { ESObjectWithLocation } from "../../../base/objs";
/**
 * https://www.wolai.com/earthsdk/o97QLCu4MuaXekD4B5DZ9r
 */
export declare class ESCustomPrimitive extends ESObjectWithLocation {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        showSceneScale: boolean | undefined;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        cull: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean | undefined>;
        boundingVolume: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<BoundingVolumeJsonType | undefined>;
        renderState: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        primitiveType: CzmPrimitiveType | undefined;
        pass: CzmPassType | undefined;
        vertexShaderSource: string | undefined;
        fragmentShaderSource: string | undefined;
        uniformMap: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmCustomPrimitiveUniformMapType | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localModelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        occlude: boolean | undefined;
        count: number | undefined;
        offset: number | undefined;
        instanceCount: number | undefined;
        castShadows: boolean | undefined;
        receiveShadows: boolean | undefined;
        executeInClosestFrustum: boolean | undefined;
        debugShowBoundingVolume: boolean | undefined;
        debugOverlappingFrustums: number | undefined;
        pickOnly: boolean | undefined;
        depthForTranslucentClassification: boolean | undefined;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static readonly defaultRenderState: {
        depthTest: {
            enabled: boolean;
        };
        cull: {
            enabled: boolean;
            face: number;
        };
        depthMask: boolean;
        blending: {
            enabled: boolean;
            equationRgb: number;
            equationAlpha: number;
            functionSourceRgb: number;
            functionSourceAlpha: number;
            functionDestinationRgb: number;
            functionDestinationAlpha: number;
        };
    };
    static readonly defaultVertexShaderSource = "in vec3 position;\nin vec3 normal;\nin vec2 st;\nout vec3 v_normalEC;\nout vec2 v_st;\nvoid main()\n{\n    // \u5982\u679C\u8FD9\u4E00\u53E5\u6CE8\u91CA\uFF0C\u8981\u76F8\u5E94\u5730\u6CE8\u91CA\u6389attribute\u4E2D\u7684normal\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9876\u70B9\u5C5E\u6027\u8981\u548Cshader\u4E2D\u7684\u4E00\u4E00\u5339\u914D\uFF01\n    v_normalEC = czm_normal * normal; \n    v_st = st;\n    gl_Position = czm_modelViewProjection * vec4(position, 1.0);\n}\n";
    static readonly defaultFragmentShaderSource = "in vec2 v_st;\nuniform sampler2D u_image;\nuniform vec4 u_color;\nvoid main()\n{\n    vec4 imageColor = texture(u_image, v_st);\n    out_FragColor = imageColor * u_color;\n}\n";
    static readonly defaultUniformMap: CzmCustomPrimitiveUniformMapType;
    static readonly defaultBoundingVolume: BoundingVolumeJsonType;
    static readonly defaultAttribute: AttributesType;
    static readonly defaultIndexTypedArray: Uint16Array;
    get attributesJson(): AttributesJsonType | undefined;
    set attributesJson(value: AttributesJsonType | undefined);
    get attributesJsonChanged(): Listener<[AttributesType | undefined, AttributesType | undefined]>;
    get indexTypedArrayJson(): IndexJsonType | undefined;
    set indexTypedArrayJson(value: IndexJsonType | undefined);
    get indexTypedArrayJsonChanged(): Listener<[IndexType | undefined, IndexType | undefined]>;
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _attributes;
    get attributes(): AttributesType | undefined;
    set attributes(value: AttributesType | undefined);
    get attributesChanged(): Listener<[AttributesType | undefined, AttributesType | undefined]>;
    private _indexTypedArray;
    get indexTypedArray(): IndexType | undefined;
    set indexTypedArray(value: IndexType | undefined);
    get indexTypedArrayChanged(): Listener<[IndexType | undefined, IndexType | undefined]>;
    static defaults: {
        allowPicking: boolean;
        position: [number, number, number];
        rotation: [number, number, number];
        scale: [number, number, number];
        modelMatrix: NativeNumber16Type;
        viewDistanceRange: [number, number, number, number];
        show: boolean;
        collision: boolean;
        flyToParam: import("../../..").ESFlyToParam;
        flyInParam: import("../../..").ESFlyInParam;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    setUniformMap(value: CzmCustomPrimitiveUniformMapType): void;
    setLocalBoundingSphere(radius: number, center?: [number, number, number]): void;
    setLocalAxisedBoundingBox(min: [number, number, number], max: [number, number, number]): void;
    static getMinMaxPosition: typeof getMinMaxPosition;
    computeLocalAxisedBoundingBoxFromAttribute(attributeName?: string): {
        min: [number, number, number];
        max: [number, number, number];
    } | undefined;
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ESCustomPrimitive {
    const createDefaultProps: () => {
        show: boolean;
        collision: boolean;
        allowPicking: boolean;
        flyToParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyToParam | undefined>;
        flyInParam: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("../../..").ESFlyInParam | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        showSceneScale: boolean | undefined;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        cull: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean | undefined>;
        boundingVolume: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<BoundingVolumeJsonType | undefined>;
        renderState: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        primitiveType: CzmPrimitiveType | undefined;
        pass: CzmPassType | undefined;
        vertexShaderSource: string | undefined;
        fragmentShaderSource: string | undefined;
        uniformMap: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmCustomPrimitiveUniformMapType | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localModelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        occlude: boolean | undefined;
        count: number | undefined;
        offset: number | undefined;
        instanceCount: number | undefined;
        castShadows: boolean | undefined;
        receiveShadows: boolean | undefined;
        executeInClosestFrustum: boolean | undefined;
        debugShowBoundingVolume: boolean | undefined;
        debugOverlappingFrustums: number | undefined;
        pickOnly: boolean | undefined;
        depthForTranslucentClassification: boolean | undefined;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
    };
}
export interface ESCustomPrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESCustomPrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ESCustomPrimitive.createDefaultProps> & {
    type: string;
}> & {
    attributes?: AttributesJsonType;
    indexTypedArray?: IndexJsonType;
};
export {};
