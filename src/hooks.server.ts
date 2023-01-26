import type { Handle } from '@sveltejs/kit';
import mongoose, { connect, set } from 'mongoose';
import { PUBLIC_MONGODB_URL } from '$env/static/public';

export const handle = (async ({ event, resolve }) => {
	if (mongoose.connection.readyState !== 1) {
		set('strictQuery', false);
		await connect(PUBLIC_MONGODB_URL);
	}

	return await resolve(event);
}) satisfies Handle;
