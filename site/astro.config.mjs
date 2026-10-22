// The documentation site. Every demo on it imports the package from ../src, so the docs always run
// the code in this commit, and every page shows the very file its demo runs.
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import starlightLinksValidator from "starlight-links-validator";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

const fromRoot = (file) => fileURLToPath(new URL(`../${file}`, import.meta.url));

export default defineConfig({
  site: "https://sirkettle.github.io",
  base: "/collection-fingerprint",
  integrations: [
    react(),
    starlight({
      title: "collection-fingerprint",
      description:
        "Draw any collection as a deterministic fingerprint: one mark per item along real-looking ridges.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/SirKettle/collection-fingerprint",
        },
      ],
      editLink: { baseUrl: "https://github.com/SirKettle/collection-fingerprint/edit/main/site/" },
      customCss: ["./src/styles/demo.css"],
      plugins: [
        starlightLinksValidator({ errorOnRelativeLinks: false }),
        starlightTypeDoc({
          entryPoints: [fromRoot("src/index.ts"), fromRoot("src/react/index.ts")],
          tsconfig: fileURLToPath(new URL("./tsconfig.typedoc.json", import.meta.url)),
          output: "reference",
          sidebar: { label: "API reference", collapsed: true },
          typeDoc: {
            entryFileName: "index",
            excludePrivate: true,
            excludeInternal: true,
            sort: ["kind", "alphabetical"],
          },
        }),
      ],
      sidebar: [
        { label: "Start", items: ["getting-started"] },
        { label: "Guides", items: [{ autogenerate: { directory: "guides" } }] },
        typeDocSidebarGroup,
      ],
    }),
  ],
  vite: {
    // The demos import the package source, outside the site: let the dev server read it.
    server: { fs: { allow: [".."] } },
    resolve: {
      alias: [
        {
          find: /^@thirkettle\/collection-fingerprint\/styles\.css$/,
          replacement: fromRoot("styles.css"),
        },
        {
          find: /^@thirkettle\/collection-fingerprint\/react$/,
          replacement: fromRoot("src/react/index.ts"),
        },
        { find: /^@thirkettle\/collection-fingerprint$/, replacement: fromRoot("src/index.ts") },
      ],
    },
  },
});
