"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = exports.PermissionBehavior = exports.PermissionLevel = void 0;
var PermissionLevel;
(function (PermissionLevel) {
    PermissionLevel[PermissionLevel["Admin"] = 1] = "Admin";
    PermissionLevel[PermissionLevel["Supervisor"] = 2] = "Supervisor";
    PermissionLevel[PermissionLevel["Manager"] = 3] = "Manager";
    PermissionLevel[PermissionLevel["Leader"] = 4] = "Leader";
    PermissionLevel[PermissionLevel["Maker"] = 5] = "Maker";
    PermissionLevel[PermissionLevel["Inspector"] = 6] = "Inspector";
    PermissionLevel[PermissionLevel["Reviewer"] = 7] = "Reviewer";
    PermissionLevel[PermissionLevel["Editor"] = 8] = "Editor";
    PermissionLevel[PermissionLevel["Contributor"] = 9] = "Contributor";
    PermissionLevel[PermissionLevel["Requestor"] = 10] = "Requestor";
    PermissionLevel[PermissionLevel["Guest"] = 98] = "Guest";
    PermissionLevel[PermissionLevel["None"] = 99] = "None";
})(PermissionLevel = exports.PermissionLevel || (exports.PermissionLevel = {}));
var PermissionBehavior;
(function (PermissionBehavior) {
    PermissionBehavior[PermissionBehavior["Access"] = 1] = "Access";
    PermissionBehavior[PermissionBehavior["Visualization"] = 2] = "Visualization";
})(PermissionBehavior = exports.PermissionBehavior || (exports.PermissionBehavior = {}));
const hasPermission = (user, module, level) => {
    if (user.isAdmin) {
        return true;
    }
    else {
        const permission = user.permissions.find((permission) => permission.module === module.uniqueIdentifier);
        return permission ? level >= permission.level : false;
    }
};
exports.hasPermission = hasPermission;
//# sourceMappingURL=permission.js.map