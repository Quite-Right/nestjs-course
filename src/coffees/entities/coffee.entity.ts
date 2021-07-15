import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() //sql table to generate coffee or you can name it inside of Entity decorator
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors: Flavor[];

  @Column({ default: 0 })
  recomendations: number;
}
