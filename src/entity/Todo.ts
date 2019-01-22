import {Index,Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("needToDo",{schema:"public"})
export class Todo {

	@PrimaryGeneratedColumn()
    id: number;


	@Column("character varying",{
		nullable:false,
		name:"name"
		})
	name:string;


	@Column("boolean",{
		nullable:false,
		name:"isComplete"
		})
	isComplete:boolean;
}