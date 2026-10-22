import type { FingerprintDimension, FingerprintItem } from "@thirkettle/collection-fingerprint";
import {
  FingerprintCanvas,
  FingerprintLegend,
  useFingerprint,
} from "@thirkettle/collection-fingerprint/react";
import "@thirkettle/collection-fingerprint/styles.css";

const dimensions: FingerprintDimension[] = [
  {
    id: "genre",
    label: "Genre",
    categories: [
      { id: "fiction", label: "Fiction" },
      { id: "poetry", label: "Poetry" },
      { id: "history", label: "History" },
    ],
  },
];

const items: FingerprintItem[] = [
  { id: "b1", values: { genre: "fiction" } },
  { id: "b2", values: { genre: "poetry" } },
  { id: "b3", values: { genre: "fiction" } },
  { id: "b4", values: { genre: null } }, // unknown: drawn, in its own category
];

export function Library() {
  const fp = useFingerprint({ items, dimensions, unit: "books" });
  return (
    <div style={{ maxWidth: 420 }}>
      <FingerprintCanvas {...fp.canvasProps} title="My library" />
      {fp.layout.legends.map((group) => (
        <FingerprintLegend key={group.dimensionId} {...fp.legendProps(group)} />
      ))}
    </div>
  );
}
