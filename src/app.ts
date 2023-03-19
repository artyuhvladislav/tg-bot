import { Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { IBotContext } from "./context/context.interface";

class Bot {
    bot: Telegraf<IBotContext>
    commands: Command[] = []
    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<IBotContext>(configService.get('TOKEN'))
        this.bot.use((new LocalSession({ database: 'sessions.json' })).middleware())
    }

    init() {
        this.commands = [new StartCommand(this.bot)]
        this.bot.launch()
        for (const command of this.commands) {
            command.handle()
        }
    }

}

const bot = new Bot(new ConfigService())
bot.init()