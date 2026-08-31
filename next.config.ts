import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  // Fixa a raiz de tracing no diretório do projeto. Sem isso, o Next infere a raiz
  // a partir de package.json/lockfiles em diretórios ACIMA (há vários apps irmãos),
  // e aninha o standalone em .next/standalone/<caminho>/server.js — quebrando o
  // `node server.js` do entrypoint no Docker. (pitfall #12 do playbook)
  outputFileTracingRoot: path.join(__dirname),
  // next-auth FORA daqui (pitfall #3 do playbook: ERR_MODULE_NOT_FOUND next/server)
  serverExternalPackages: [
    "@prisma/client",
    "prisma",
    "@auth/core",
    "@auth/prisma-adapter",
    "bcryptjs",
  ],
  // No build standalone o Next só serve os arquivos que estavam em public/ no
  // momento do boot — uploads feitos pelo admin dariam 404 até reiniciar o
  // container. "afterFiles" mantém os arquivos estáticos existentes na frente e
  // manda só o que não existe no build para a rota que lê o UPLOAD_DIR.
  // Domínio canônico: clinicat24hs.com.br. O endereço de staging
  // (clinicat.tudomudou.com.br) e o www continuam respondendo no proxy,
  // mas redirecionam 301 para não dividir tráfego, SEO e métricas de ads.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "clinicat.tudomudou.com.br" }],
        destination: "https://clinicat24hs.com.br/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.clinicat24hs.com.br" }],
        destination: "https://clinicat24hs.com.br/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/uploads/:file", destination: "/api/uploads/:file" },
        // Relatório de mídia paga (público em /relatorios; arquivo em public/)
        { source: "/relatorios", destination: "/relatorios.html" },
        // Auditoria de 90 dias jun–ago/2026. URL limpa; arquivo em public/.
        // O acesso é restrito a quem tem login (middleware + auth.config.ts).
        {
          source: "/relatorio-de-performance",
          destination: "/relatorio-de-performance.html",
        },
      ],
      fallback: [],
    };
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
