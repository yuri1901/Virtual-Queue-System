import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2,
            consistent: true,
          },
        },
      ],

      "object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],
    },
  },
]);

export default eslintConfig;