import { inject, singleton } from "tsyringe";
import Handler from "../../domain/service/handler.service";
import DogHandler from "../handler/dog.handler";
import MonkeyHandler from "../handler/monkey.handler";
import SquirrelHandler from "../handler/squirrel.handler";
import AppStoreService from "../service/app-store.service";

@singleton()
export default class ClientCodeUseCase {

    constructor(
        @inject(MonkeyHandler) private monkey: Handler,
        @inject(SquirrelHandler) private squirrel: Handler,
        @inject(DogHandler) private dog: DogHandler,
        @inject(AppStoreService) public storeService: AppStoreService,
    ) {
        this.monkey.setNext(this.squirrel).setNext(this.dog);

        this.storeService.message.push('Chain: Monkey > Squirrel > Dog');
        this.execute(monkey);
        this.storeService.message.push('==============================');
        this.storeService.message.push('Subchain: Squirrel > Dog');
        this.execute(squirrel);
    }

    execute(handler: Handler) {
        const foods = ['Nut', 'Banana', 'Cup of coffee'];

        for (const food of foods) {
            this.storeService.message.push(`Client: Who wants a ${food}?`);

            const result = handler.handle(food);
            if (result) {
                this.storeService.message.push(`  ${result}`);
            } else {
                this.storeService.message.push(`  ${food} was left untouched.`);
            }
        }
    }
}
