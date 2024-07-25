import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  todo: string;

  @Column
  done: boolean;

  @Column
  img: string;
}
