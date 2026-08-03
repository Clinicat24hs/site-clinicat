import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // next-auth FORA daqui (pitfall #3 do playbook: ERR_MODULE_NOT_FOUND next/server)
  serverExternalPackages: [
    "@prisma/client",
    "prisma",
    "@auth/core",
    "@auth/prisma-adapter",
    "bcryptjs",
  ],
};

export default nextConfig;
