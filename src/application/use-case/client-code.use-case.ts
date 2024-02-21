import { inject, singleton } from "tsyringe";
import Handler from "../../domain/service/handler.service";
import DogHandler from "../handler/dog.handler";
import MonkeyHandler from "../handler/monkey.handler";
import SquirrelHandler from "../handler/squirrel.handler";

@singleton()
export default class ClientCodeUseCase {
    constructor(
        @inject(MonkeyHandler) private monkey: Handler,
        @inject(SquirrelHandler) private squirrel: Handler,
        @inject(DogHandler) private dog: DogHandler,
    ) {
        this.monkey.setNext(this.squirrel).setNext(this.dog);

        console.log('Chain: Monkey > Squirrel > Dog\n');
        this.execute(monkey);
        console.log('');

        console.log('Subchain: Squirrel > Dog\n');
        this.execute(squirrel);
    }

    execute(handler: Handler) {
        const foods = ['Nut', 'Banana', 'Cup of coffee'];

        for (const food of foods) {
            console.log(`Client: Who wants a ${food}?`);

            const result = handler.handle(food);
            if (result) {
                console.log(`  ${result}`);
            } else {
                console.log(`  ${food} was left untouched.`);
            }
        }
    }
}
