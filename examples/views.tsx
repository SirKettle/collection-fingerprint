import type { FingerprintDimension, FingerprintItem } from "@thirkettle/collection-fingerprint";
import {
  FingerprintCanvas,
  FingerprintViewSwitch,
  useFingerprint,
  type FingerprintView,
} from "@thirkettle/collection-fingerprint/react";

const views: FingerprintView[] = [
  {
    id: "all",
    label: "Combined",
    encoding: { arrange: "genre", color: "genre", shape: "state", lightness: "decade" },
  },
  { id: "genre", label: "Genre", encoding: { arrange: "genre" } },
  { id: "decade", label: "Decade", encoding: { arrange: "decade" } },
];

export function Shelves({
  items,
  dimensions,
}: {
  items: FingerprintItem[];
  dimensions: FingerprintDimension[];
}) {
  const fp = useFingerprint({ items, dimensions, views, unit: "books" });
  return (
    <>
      <FingerprintViewSwitch views={fp.views} value={fp.viewId} onChange={fp.setViewId} />
      <FingerprintCanvas {...fp.canvasProps} title="My library" />
    </>
  );
}
