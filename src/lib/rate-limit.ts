interface Options {
  limit: number;
  windowMs: number;
  clock?: () => number;
}

export function makeRateLimiter({ limit, windowMs, clock = Date.now }: Options) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  return {
    check(key: string): boolean {
      const now = clock();
      const entry = hits.get(key);
      if (!entry || now >= entry.resetAt) {
        hits.set(key, { count: 1, resetAt: now + windowMs });
        return true;
      }
      if (entry.count >= limit) return false;
      entry.count += 1;
      return true;
    },
  };
}

// Instância compartilhada para o login (5 tentativas / 5 min por IP).
export const loginRateLimiter = makeRateLimiter({ limit: 5, windowMs: 5 * 60_000 });
