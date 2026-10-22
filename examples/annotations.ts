import type { FingerprintAnnotation } from "@thirkettle/collection-fingerprint";

export const annotations: FingerprintAnnotation[] = [
  {
    id: "lead",
    dimensionId: "genre",
    categoryIds: ["fiction"],
    title: "Mostly fiction",
    body: "62% of the library.",
  },
];
