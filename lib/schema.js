"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getField = void 0;
const getField = (schema, key) => schema.fields.find((field) => field.key === key);
exports.getField = getField;
//# sourceMappingURL=schema.js.map