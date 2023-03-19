import { Context } from "telegraf";

interface SessionData {
    workLike: boolean;
}

export interface IBotContext extends Context {
    session: SessionData
}