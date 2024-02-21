import { injectable } from "tsyringe";
import AbstractHandler from "../service/abstract-handler.service";

@injectable()
export default class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}