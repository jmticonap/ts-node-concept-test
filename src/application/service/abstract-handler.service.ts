import Handler from "../../domain/service/handler.service";
import AppStoreService from "./app-store.service";

export default abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler | undefined;

    constructor(protected storeService: AppStoreService) {}

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}