import { Command } from "./command.class";
import { Markup, Telegraf } from 'telegraf';
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }
    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply('Do you like working at wnd', Markup.inlineKeyboard([
                Markup.button.callback("👍", 'like_work'),
                Markup.button.callback("👎", 'dislike_work')
            ]))
        })

        this.bot.action('like_work', (ctx) => {
            ctx.session.workLike = true
            ctx.editMessageText('🤣 ebat ty lox')
        })
        this.bot.action('dislike_work', (ctx) => {
            ctx.session.workLike = false
            ctx.editMessageText('😎 norm pacan')
        })
    }

}