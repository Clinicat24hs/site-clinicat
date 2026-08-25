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

## Tags de mídia paga (Meta Pixel + Google Ads)

Todas as variáveis são **opcionais**: sem elas, nenhuma tag é carregada e o site
funciona normalmente. Como são `NEXT_PUBLIC_*`, o Next as embute no bundle
**durante o build** — então, ao adicionar ou trocar qualquer uma delas no
Coolify, é preciso **Redeploy** (um Restart não basta).

| Variável | Onde pegar |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta: Gerenciador de Eventos → Fontes de dados → ID do pixel |
| `NEXT_PUBLIC_GOOGLE_TAG_ID` | `AW-XXXXXXXXX` (Google Ads → Metas → Tag do Google) ou `G-XXXXXXX` (GA4) |
| `NEXT_PUBLIC_GADS_LABEL_WHATSAPP` | Google Ads → Metas → Conversões → ação → "Instalar a tag manualmente" → valor de `send_to` |
| `NEXT_PUBLIC_GADS_LABEL_PHONE` | idem, para a ação de clique no telefone |
| `NEXT_PUBLIC_GADS_LABEL_FORM` | idem, para a ação de envio do formulário |

Eventos disparados (`src/lib/track.ts`), em toda clique de contato do site:

| Ação do visitante | Meta Pixel | Google |
|---|---|---|
| Clique em link `wa.me` | `Contact` (channel: whatsapp) | `clique_whatsapp` + conversão |
| Clique em link `tel:` | `Contact` (channel: phone) | `clique_telefone` + conversão |
| Envio do formulário de contato | `Contact` (channel: form) | `envio_formulario` + conversão |

Cada evento leva também o **local do clique** (header, footer, conteúdo…), para
separar no relatório qual ponto de contato converte melhor. O rastreio é por
delegação (`ContactTracker`), então links de contato novos entram sozinhos.

### Como validar depois do deploy
- **Meta**: extensão *Meta Pixel Helper* — deve mostrar PageView ao abrir e
  Contact ao clicar no WhatsApp. Ou Gerenciador de Eventos → Testar eventos.
- **Google**: Google Ads → Metas → Conversões (status sai de "Nenhuma conversão
  recente" em algumas horas), ou a *Tag Assistant* em tempo real.

## Notas
- Migrations rodam sozinhas no start (`entrypoint.sh` → `migrate.js`).
- Webhook GitHub → Coolify para auto-deploy (opcional): serviço → Webhooks.
