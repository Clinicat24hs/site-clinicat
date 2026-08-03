import { describe, it, expect } from "vitest";
import { authorizeAdmin } from "@/lib/authorize";
import { hashPassword } from "@/lib/password";

function fakeRepo(email: string, hash: string) {
  return {
    findByEmail: async (e: string) =>
      e === email ? { id: "1", email, passwordHash: hash, name: "Admin" } : null,
  };
}

describe("authorizeAdmin", () => {
  it("retorna o usuário quando e-mail e senha batem", async () => {
    const hash = await hashPassword("senha-forte");
    const repo = fakeRepo("admin@clinicat.com", hash);
    const user = await authorizeAdmin(repo, "admin@clinicat.com", "senha-forte");
    expect(user).toMatchObject({ id: "1", email: "admin@clinicat.com" });
  });

  it("retorna null quando o e-mail não existe", async () => {
    const hash = await hashPassword("senha-forte");
    const repo = fakeRepo("admin@clinicat.com", hash);
    expect(await authorizeAdmin(repo, "outro@x.com", "senha-forte")).toBeNull();
  });

  it("retorna null quando a senha está errada", async () => {
    const hash = await hashPassword("senha-forte");
    const repo = fakeRepo("admin@clinicat.com", hash);
    expect(await authorizeAdmin(repo, "admin@clinicat.com", "errada")).toBeNull();
  });

  it("retorna null quando faltam credenciais", async () => {
    const repo = fakeRepo("admin@clinicat.com", "x");
    expect(await authorizeAdmin(repo, "", "")).toBeNull();
  });
});
