import { injectable } from "tsyringe";
import AbstractHandler from "../service/abstract-handler.service";

@injectable()
export default class DogHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}