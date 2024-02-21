import { container } from "tsyringe";
import ClientCodeUseCase from "../../application/use-case/client-code.use-case";

const executorController = () => {
    const clientCode = container.resolve(ClientCodeUseCase);
};
export default executorController;
