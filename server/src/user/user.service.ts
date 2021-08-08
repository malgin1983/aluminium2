import { Inject, Injectable } from '@nestjs/common';
import { IUser, User } from './dto/user.dto';
import { Repositories } from './user.providers';

@Injectable()
export class UserService {
    constructor(
        @Inject(Repositories.UserRepository)
        private readonly user: typeof User,
    ) {}

    async create(data: IUser) {
        return this.user.create(data);
    }

    async gets() {
        return this.user.findAll();
    }

    async get(options = {}) {
        return this.user.findOne(options);
        // return this.user.findAll(options);
    }

    async getByUsername(username: string) {
        return this.user.findOne({ where: { username: username }, raw: true });
    }
}
