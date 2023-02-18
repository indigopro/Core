"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleNormalization = exports.DefaultModule = void 0;
const permission_1 = require("./permission");
exports.DefaultModule = {
    uniqueIdentifier: '',
    authorization: 'Authorize',
    minimumAccessLevel: permission_1.PermissionLevel.Guest,
    sequence: 0,
    name: '',
    fullName: null,
    displayName: null,
    description: null,
    version: '1.0',
    release: 'Alpha',
    tile: null,
    group: '',
    route: '',
    redirectLink: '',
    userGuideLink: null,
    isPublished: false,
    isHidden: false,
    isRedirectLink: false,
    hasSettings: false,
    settings: {},
};
const moduleNormalization = (modules) => {
    return modules.map((o) => {
        const module = {
            uniqueIdentifier: o.uniqueIdentifier,
            authorization: o.authorization || 'Authorize',
            group: o.moduleGroupName,
            route: o.route || `/${o.name}`,
            redirectLink: o.redirectLink,
            name: o.name,
            displayName: o.displayName || o.name,
            fullName: o.fullName || o.displayName,
            description: o.description,
            version: o.version || '1.0',
            release: o.release || 'Alpha',
            tile: {
                caption: o.tileCaption || o.displayName || o.fullName,
                color: o.tileColor,
                icon: o.icon,
            },
            userGuideLink: o.userGuideLink,
            isPublished: o.isPublished,
            isHidden: o.isHidden,
            isRedirectLink: o.isRedirectLink,
            sequence: o.sequence || 0,
            hasSettings: false,
            settings: {},
            minimumAccessLevel: permission_1.PermissionLevel[o.minimumAccessLevel] || permission_1.PermissionLevel.Guest,
        };
        return module;
    });
};
exports.moduleNormalization = moduleNormalization;
//# sourceMappingURL=module.js.map