const cached = await redis.get(cacheKey);

if (cached) {
  return JSON.parse(cached);
}

const data = await db.getData();

await redis.set(cacheKey, JSON.stringify(data));