import {
  Column,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

export interface IUser {
  id?: number;
  email
      : string;
  password: string;
  name: string;
  role: string;
}

@Table({
  tableName: 'Users',
  timestamps: true,
  paranoid: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  name: string;

  @Column
  role: string;
}
