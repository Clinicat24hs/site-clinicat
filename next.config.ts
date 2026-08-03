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
