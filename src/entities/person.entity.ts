import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Person {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  age: number;
}