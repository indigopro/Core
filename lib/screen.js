"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHook = exports.Orientation = void 0;
var Orientation;
(function (Orientation) {
    Orientation["Landscape"] = "landscape";
    Orientation["Portrait"] = "portrait";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
class ScreenHook {
    height = 0;
    width = 0;
    orientation = Orientation.Landscape;
    responsive = { factor: 1 };
    isFullScreen = false;
    constructor() {
        this.getFeature();
        window.onresize = () => this.getFeature();
    }
    getFeature() {
        const { innerWidth, innerHeight, screen } = window;
        const orientation = innerWidth >= innerHeight ? Orientation.Landscape : Orientation.Portrait;
        const responsive = { factor: 1 };
        if (orientation === Orientation.Landscape) {
            if (innerWidth < 1400)
                responsive.factor = 0.8;
            if (innerWidth < 1000)
                responsive.factor = 0.6;
        }
        else {
            if (innerWidth < 480)
                responsive.factor = 0.6;
            if (innerWidth < 320)
                responsive.factor = 0.8;
        }
        this.height = innerHeight;
        this.width = innerWidth;
        this.orientation = orientation;
        this.responsive = responsive;
        this.isFullScreen = window.innerWidth === screen.width && window.innerHeight === screen.height;
    }
}
exports.ScreenHook = ScreenHook;
//# sourceMappingURL=screen.js.map