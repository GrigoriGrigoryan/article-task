import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";
import {IArticle} from "../Interfaces/Interfaces";


@Entity("article")
export class Article implements IArticle{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 255, default: 'Untitled article'})
    heading!:string;

    @Column({length: 10000})
    content!: string;

    @CreateDateColumn({nullable: true})
    created_at!: Date;

    @CreateDateColumn({nullable: true})
    updated_at!: Date;
}