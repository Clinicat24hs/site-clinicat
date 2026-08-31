# ─── Stage 1: deps ───────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
ENV NODE_ENV=development
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# ─── Stage 2: builder ────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# NÃO definir NODE_ENV=development aqui (pitfall #2 do playbook)
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# As variáveis NEXT_PUBLIC_* são inlinadas por Next durante `next build`, não
# lidas em runtime: definidas só no ambiente do container, as tags de Meta e
# Google saem do bundle vazias e nenhuma conversão é medida — sem erro nenhum
# no log. Por isso precisam chegar como build args, e o build precisa ser
# refeito sempre que uma delas mudar.
ARG NEXT_PUBLIC_META_PIXEL_ID=""
ARG NEXT_PUBLIC_GOOGLE_TAG_ID=""
ARG NEXT_PUBLIC_GADS_LABEL_WHATSAPP=""
ARG NEXT_PUBLIC_GADS_LABEL_PHONE=""
ARG NEXT_PUBLIC_GADS_LABEL_FORM=""
ENV NEXT_PUBLIC_META_PIXEL_ID=$NEXT_PUBLIC_META_PIXEL_ID
ENV NEXT_PUBLIC_GOOGLE_TAG_ID=$NEXT_PUBLIC_GOOGLE_TAG_ID
ENV NEXT_PUBLIC_GADS_LABEL_WHATSAPP=$NEXT_PUBLIC_GADS_LABEL_WHATSAPP
ENV NEXT_PUBLIC_GADS_LABEL_PHONE=$NEXT_PUBLIC_GADS_LABEL_PHONE
ENV NEXT_PUBLIC_GADS_LABEL_FORM=$NEXT_PUBLIC_GADS_LABEL_FORM

RUN ./node_modules/.bin/prisma generate
RUN npm run build

# ─── Stage 3: runner ─────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/migrate.js ./migrate.js
# Apenas @prisma/ (o client) — NÃO o CLI (pitfall #4)
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

COPY --chown=nextjs:nodejs entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

# volume de uploads é montado aqui em runtime
RUN mkdir -p /app/public/uploads && chown -R nextjs:nodejs /app/public/uploads

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["./entrypoint.sh"]
