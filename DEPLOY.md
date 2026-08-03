# Deploy no Coolify

## Pré-requisitos
- Repositório `github.com/Clinicat24hs/site-clinicat` com este código na branch `main`.
- Projeto no Coolify apontando para o repo (Dockerfile build).

## Passos
1. **PostgreSQL**: criar um serviço PostgreSQL no Coolify. Copiar o campo
   **"Postgres URL (internal)"**.
2. **Serviço Next.js** (este repo):
   - Build Pack: **Dockerfile**. Dockerfile Location: `/Dockerfile`. Base Directory: `/`.
   - Env vars:
     - `DATABASE_URL` = a "Postgres URL (internal)" do passo 1.
     - `AUTH_SECRET` = `openssl rand -base64 32`.
     - `UPLOAD_DIR` = `/app/public/uploads`.
     - `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME` (para o seed).
     - `NODE_ENV=production` marcado como **Runtime only**.
3. **Volume persistente** (fotos): no serviço Next.js → Storage → adicionar volume
   montado em **`/app/public/uploads`**. Isso preserva as imagens entre redeploys.
4. **Domínio**: configurar com `https://` no Coolify.
5. `git push origin main` → o Coolify faz o build e sobe.
6. **Seed do admin** (uma vez, após o primeiro deploy estável) — no Terminal do serviço:
   ```bash
   node /app/prisma/seed.js
   ```
7. Testar `/admin/login` com `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

## Notas
- Migrations rodam sozinhas no start (`entrypoint.sh` → `migrate.js`).
- Webhook GitHub → Coolify para auto-deploy (opcional): serviço → Webhooks.
