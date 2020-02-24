import {Table, Column, Model, DataType} from 'sequelize-typescript';

@Table({tableName: 'users'})
export default class User extends Model<User> {

    @Column(DataType.STRING)
    public name!: string;

    @Column(DataType.STRING)
    public email!: string;

    @Column(DataType.STRING)
    public password!: string;
}
