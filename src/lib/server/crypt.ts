import crypto from 'node:crypto';

export const createHashedPassword = (password: string) => {
	const salt = crypto.randomBytes(16);
	const hashedPwd = crypto.pbkdf2Sync(password, salt, 128941, 32, 'sha256');
	return {
		hashedPwd: hashedPwd.toString('base64'),
		salt: salt.toString('base64')
	};
};
