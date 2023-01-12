import { boardList } from '$lib/server/db';

export async function load() {
  const boards = await boardList();
  // list
  return { boards };
}