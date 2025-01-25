import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    entidade: string;

    @Column()
    entidade_id: number;

    @Column()
    dtinc: Date;
}