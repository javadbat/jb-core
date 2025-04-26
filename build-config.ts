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
  }
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-core-react",
    path: "./react/lib/index.ts",
    outputPath: "./react/dist/index.js",
    umdName: "JBCoreReact",
    external:['react'],
    dir:"./react",
    globals:{
      'react':"React"
    }
  }
];