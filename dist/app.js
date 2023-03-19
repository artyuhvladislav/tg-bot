"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const telegraf_session_local_1 = __importDefault(require("telegraf-session-local"));
const start_command_1 = require("./commands/start.command");
const config_service_1 = require("./config/config.service");
class Bot {
    constructor(configService) {
        this.configService = configService;
        this.commands = [];
        this.bot = new telegraf_1.Telegraf(configService.get('TOKEN'));
        this.bot.use((new telegraf_session_local_1.default({ database: 'sessions.json' })).middleware());
    }
    init() {
        this.commands = [new start_command_1.StartCommand(this.bot)];
        this.bot.launch();
        for (const command of this.commands) {
            command.handle();
        }
    }
}
const bot = new Bot(new config_service_1.ConfigService());
bot.init();
