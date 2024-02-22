import { singleton } from "tsyringe";

@singleton()
export default class AppStoreService {
    message: string[] = [];
}
