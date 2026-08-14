import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-core",
    path: "./lib/index.ts",
    outputPath: "./dist/index.js",
    umdName: "JBCore",
  },
  {
    name: "jb-core-theme",
    path: "./theme/lib/index.ts",
    outputPath: "./theme/dist/index.js",
    umdName: "JBCoreTheme",
    dir: "./theme",
  },
  {
    name: "jb-core-i18n",
    path: "./i18n/lib/index.ts",
    outputPath: "./i18n/dist/index.js",
    umdName: "JBCoreI18N",
    dir: "./i18n",
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-core-i18n-react",
    path: "./i18n/react/lib/index.ts",
    outputPath: "./i18n/react/dist/index.js",
    umdName: "JBCoreI18NReact",
    external: ["react", "jb-core/i18n"],
    dir: "./i18n/react",
    globals: {
      react: "React",
      "jb-core/i18n": "JBCoreI18N",
    },
  },
  {
    name: "jb-core-react",
    path: "./react/lib/index.ts",
    outputPath: "./react/dist/index.js",
    umdName: "JBCoreReact",
    external: ["react"],
    dir: "./react",
    globals: {
      react: "React",
    },
  },
];
