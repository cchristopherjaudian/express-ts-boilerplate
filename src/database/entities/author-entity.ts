import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Author {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({
      length: 100,
      nullable: false,
   })
   name: string;

   @Column({
      length: 100,
      nullable: false,
   })
   authorReference: string;

   @Column({
      length: 100,
      nullable: false,
   })
   address: string;

   @Column({
      length: 100,
      nullable: false,
   })
   contactNumber: string;

   @Column({
      length: 100,
      nullable: true,
   })
   emailAddress: string;
}

export default Author;
