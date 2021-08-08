import { User } from './dto/user.dto';

export const Repositories = {
    UserRepository: 'UsersRepository',
    AddressRepository: 'AddressRepository',
};

export const UserProvider = [
    {
        provide: Repositories.UserRepository,
        useValue: User,
    },
];
