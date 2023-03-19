"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv_1 = require("dotenv");
class ConfigService {
    constructor() {
        const { error, parsed } = (0, dotenv_1.config)();
        if (error) {
            throw new Error('Did not find file .env');
        }
        if (!parsed) {
            throw new Error('File .env is empty');
        }
        this.config = parsed;
    }
    get(key) {
        const res = this.config[key];
        if (!res) {
            throw new Error('This key is empty');
        }
        return res;
    }
}
exports.ConfigService = ConfigService;
