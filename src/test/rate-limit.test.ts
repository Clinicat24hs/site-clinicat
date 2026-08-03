import { describe, it, expect } from "vitest";
import { makeRateLimiter } from "@/lib/rate-limit";

describe("rate-limit", () => {
  it("permite até o limite e bloqueia o excedente na mesma janela", () => {
    let now = 1000;
    const clock = () => now;
    const rl = makeRateLimiter({ limit: 3, windowMs: 60000, clock });
    expect(rl.check("ip1")).toBe(true);
    expect(rl.check("ip1")).toBe(true);
    expect(rl.check("ip1")).toBe(true);
    expect(rl.check("ip1")).toBe(false); // 4ª tentativa bloqueada
  });

  it("libera após a janela expirar", () => {
    let now = 1000;
    const clock = () => now;
    const rl = makeRateLimiter({ limit: 1, windowMs: 60000, clock });
    expect(rl.check("ip1")).toBe(true);
    expect(rl.check("ip1")).toBe(false);
    now += 60001;
    expect(rl.check("ip1")).toBe(true);
  });

  it("isola chaves diferentes", () => {
    const rl = makeRateLimiter({ limit: 1, windowMs: 60000, clock: () => 0 });
    expect(rl.check("ip1")).toBe(true);
    expect(rl.check("ip2")).toBe(true);
  });
});
