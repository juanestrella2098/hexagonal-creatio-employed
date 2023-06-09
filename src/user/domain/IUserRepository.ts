import { User } from './User';

export interface IUserRepository {
	getUser(id: number): Promise<User | null>;
	getAllUser(): Promise<User[]>;
	createUser(user: User): Promise<User | undefined>;
	deleteUser(id: number): Promise<boolean>;
	updateUser(
		id: number,
		fieldsToUpdate: Partial<User>,
	): Promise<User | undefined>;
	signIn(email: string, password: string): Promise<User | null>;
	verifyToken(token: string): Promise<User | null>;
}
