import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", unique: true })
    email: string;

    @Column({ type: "bool", default: false })
		confirmed: boolean;

		@Column({ type: "varchar", length: "225" })
		firstName: string;

    @Column({ type: "varchar", length: "255" })
    lastName: string;

		@Column() age: number;
}
