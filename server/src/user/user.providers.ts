import { User } from './entity/user.entity';

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
