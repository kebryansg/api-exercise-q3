import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("player")
export class Player {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "first-name"
  })
  firstName: string;

  @Column({
    name: "last-name"
  })
  lastName: string;

  @Column()
  image: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  skills: number;

  @Column({
    name: "id-author"
  })
  idAuthor: number;

  @Column({
    name: "id-position"
  })
  idPosition: number;

}
