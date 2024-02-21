import { injectable } from "tsyringe";
import AbstractHandler from "../service/abstract-handler.service";

@injectable()
export default class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);

    }
}