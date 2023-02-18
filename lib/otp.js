"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOTP = exports.getExpireDatetime = exports.TimeoutSec = void 0;
const moment_1 = __importDefault(require("moment"));
const otp_generator_1 = __importDefault(require("otp-generator"));
exports.TimeoutSec = 90;
const getExpireDatetime = (date = new Date(), seconds = exports.TimeoutSec) => (0, moment_1.default)().add(seconds, 'seconds');
exports.getExpireDatetime = getExpireDatetime;
const newOTP = () => {
    const otpCode = otp_generator_1.default.generate(6, { digits: true, lowerCaseAlphabets: false, specialChars: false, upperCaseAlphabets: false });
    return otpCode;
};
exports.newOTP = newOTP;
//# sourceMappingURL=otp.js.map