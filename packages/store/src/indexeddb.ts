export async function saveState(key: string, state: any) {
  const db = await openDB('app-db', 1, {
    upgrade(db) {
      db.createObjectStore('states');
    }
  });

  await db.put('states', state, key);
}