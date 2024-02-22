import Handler from "../../domain/service/handler.service";
import AppStoreService from "./app-store.service";

export default abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler | undefined;

    constructor(private storeService: AppStoreService) {}

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            this.storeService.message.push(request);
            return this.nextHandler.handle(request);
        }

        return null;
    }
}