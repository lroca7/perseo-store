import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`, //Agregar nuestras variables sass a todos nuestros archivos
  },
};

export default nextConfig;
