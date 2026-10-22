import { markOpacity } from "@thirkettle/collection-fingerprint";
import type { FingerprintRenderer } from "@thirkettle/collection-fingerprint/react";

const glyphs = ["★", "●", "■", "▲", "◆"];

export const stars: FingerprintRenderer = {
  name: "stars",
  mark: ({ node }) => (
    <text
      fontSize={node.size}
      textAnchor="middle"
      dy="0.35em"
      fill={node.color}
      opacity={markOpacity(node)}
    >
      {node.shape === null ? "?" : glyphs[node.shape % glyphs.length]}
    </text>
  ),
};
