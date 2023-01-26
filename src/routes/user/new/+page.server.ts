import { fail, redirect } from '@sveltejs/kit';

import type { Actions } from './$types';
import { createHashedPassword } from '$lib/server/crypt';
import { User, type IUser } from '$lib/server/model/User';
import type { HydratedDocument } from 'mongoose';

export const actions = {
	default: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get('username')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const role = formData.get('role')?.toString() ?? '';

    if (!username || !password || !role) {
      return fail(400, { username, role, error: true, message: 'Wrong input' });
    }

    const { hashedPwd, salt } = createHashedPassword(password);
    const u: HydratedDocument<IUser> = new User({
      username, password: hashedPwd, salt, role
    });
    
    try {
      await u.save();      
    } catch(e) {
      return fail(400, { username, role, error: true, message: 'Something wrong' });
    }
    throw redirect(303, '/user');      
  }
} satisfies Actions;
