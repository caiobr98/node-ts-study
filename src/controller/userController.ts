import { Logger } from '../service/logger';

export class UserController {
    private logger: Logger;
    constructor() {
        this.logger = Logger.getInstance();
    }

    public getAllUsers(): any[] {
        this.logger.log('Fetching all users');

        return [];
    }
}