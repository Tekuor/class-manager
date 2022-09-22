const { generateTemplateFiles } = require("generate-template-files");

generateTemplateFiles([
  {
    option: "Create Route",
    defaultCase: "(camelCase)",
    entry: {
      folderPath: "./src/tools/templates/routes.ts",
    },
    stringReplacers: ["__resource__", "__singleResource__", "__identifier__"],
    output: {
      path: "./src/routes/__resource__(camelCase).ts",
      pathAndFileNameDefaultCase: "(camelCase)",
    },
  },
  {
    option: "Create Service",
    defaultCase: "(camelCase)",
    entry: {
      folderPath: "./src/tools/templates/services.ts",
    },
    stringReplacers: ["__resource__", "__singleResource__"],
    output: {
      path: "./src/services/__resource__/index.ts",
      pathAndFileNameDefaultCase: "(camelCase)",
    },
  },
]);
