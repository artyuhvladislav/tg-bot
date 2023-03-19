"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const command_class_1 = require("./command.class");
const telegraf_1 = require("telegraf");
class StartCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.start((ctx) => {
            ctx.reply('Do you like working at wnd', telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.callback("👍", 'like_work'),
                telegraf_1.Markup.button.callback("👎", 'dislike_work')
            ]));
        });
        this.bot.action('like_work', (ctx) => {
            ctx.session.workLike = true;
            ctx.editMessageText('🤣 ebat ty lox');
        });
        this.bot.action('dislike_work', (ctx) => {
            ctx.session.workLike = false;
            ctx.editMessageText('😎 norm pacan');
        });
    }
}
exports.StartCommand = StartCommand;
