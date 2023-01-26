import { User, type IUser } from '$lib/server/model/User';
import type { HydratedDocument } from 'mongoose';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const result: HydratedDocument<IUser>[] = await User.find({});
  const users = result.map(u => ({
    _id: u._id.toString(),
    username: u.username,
    role: u.role
  }));
  
  return { users };
}) satisfies PageServerLoad;
