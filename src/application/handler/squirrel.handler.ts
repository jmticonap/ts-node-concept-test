import { inject, injectable } from "tsyringe";
import AbstractHandler from "../service/abstract-handler.service";
import AppStoreService from "../service/app-store.service";

@injectable()
export default class SquirrelHandler extends AbstractHandler {
    constructor(@inject(AppStoreService) storeService: AppStoreService) {
        super(storeService);
    }

    public handle(request: string): string | null {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}