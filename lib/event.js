"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectEvent = exports.ChangeEvent = exports.Event = void 0;
class Event {
    type;
    target;
    timeStamp = Date.now();
    constructor(element) {
        this.type = this.constructor.name;
        this.target = element;
        this.timeStamp = Date.now();
    }
}
exports.Event = Event;
class ChangeEvent extends Event {
}
exports.ChangeEvent = ChangeEvent;
class SelectEvent extends Event {
}
exports.SelectEvent = SelectEvent;
//# sourceMappingURL=event.js.map