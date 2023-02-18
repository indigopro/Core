export declare enum Orientation {
    Landscape = "landscape",
    Portrait = "portrait"
}
export type Screen = {
    height: number;
    width: number;
    orientation: Orientation;
    responsive: {
        factor: number;
    };
    isFullScreen: boolean;
};
export declare class ScreenHook implements Screen {
    height: number;
    width: number;
    orientation: Orientation;
    responsive: {
        factor: number;
    };
    isFullScreen: boolean;
    constructor();
    private getFeature;
}
