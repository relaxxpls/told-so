module.exports = {
  extends: ["eslint-config-web"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      extends: ["eslint-config-web/typescript", "next/core-web-vitals"],
    },
  ],
};
