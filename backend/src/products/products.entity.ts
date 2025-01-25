import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    codprod: number;

    @Column()
    dscrprod: string;

    @Column()
    marca: string;

    @Column()
    valor: string;

    @Column({ default: true })
    status: boolean;
}
