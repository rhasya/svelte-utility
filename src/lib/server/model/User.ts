import { Schema, model, models } from 'mongoose';

interface IUser {
	username: string;
	password: string;
	salt: string;
	role: string;
}

const schema = new Schema<IUser>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	salt: { type: String, required: true },
	role: { type: String, required: true, default: 'USER' }
});

model<IUser>('User', schema);
const User = models['User'];

export { User , type IUser };
