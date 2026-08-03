import { describe, it, expect } from "vitest";
import { hashPassword, verifyPassword } from "@/lib/password";

describe("password", () => {
  it("gera hash diferente da senha original", async () => {
    const hash = await hashPassword("segredo123");
    expect(hash).not.toBe("segredo123");
    expect(hash.length).toBeGreaterThan(20);
  });

  it("verifica a senha correta", async () => {
    const hash = await hashPassword("segredo123");
    expect(await verifyPassword("segredo123", hash)).toBe(true);
  });

  it("rejeita a senha errada", async () => {
    const hash = await hashPassword("segredo123");
    expect(await verifyPassword("errada", hash)).toBe(false);
  });
});
