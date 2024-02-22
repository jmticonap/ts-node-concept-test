import { container } from "tsyringe";
import ClientCodeUseCase from "../../application/use-case/client-code.use-case";
import { Request, Response } from "express";

const executorController = (_: Request, res: Response) => {
    const clientCode = container.resolve(ClientCodeUseCase);

    res.send(JSON.stringify(clientCode.storeService));
};
export default executorController;
