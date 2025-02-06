import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-core",
    path: "./lib/index.ts",
    outputPath: "./dist/index.js",
    umdName: "JBCore",
  }
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-core-react",
    path: "./react/lib/index.ts",
    outputPath: "./react/dist/index.js",
    umdName: "JBCoreReact",
  }
];