import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { BoardList } from '$lib/types';

// DB Path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

// Lowdb
const adapter = new JSONFile(file);
const db = new Low(adapter) as Low<BoardList>;

// functions
const boardList = async () => {
  await db.read();
  db.data ??= { board_list: [] };
  return db.data.board_list;
};

export default db;
export { boardList };