"use client";

import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";

export type RingsTheme = "light" | "dark";

type Palette = {
  /** Ring colors, outer → inner per cluster. */
  rings: string[];
  emissive: string;
  emissiveIntensity: number;
  ambient: number;
  key: number;
  rim: string;
};

const PALETTES: Record<RingsTheme, Palette> = {
  // Hero, over cream — warm muted gold, low contrast so it reads as texture.
  light: {
    rings: ["#9C7B2E", "#C2A24E"],
    emissive: "#9C7B2E",
    emissiveIntensity: 0.12,
    ambient: 0.85,
    key: 1.1,
    rim: "#F4EEE0",
  },
  // Dark sections, over forest-deep — brighter gold with a forest accent.
  dark: {
    rings: ["#C2A24E", "#9C7B2E"],
    emissive: "#C2A24E",
    emissiveIntensity: 0.35,
    ambient: 0.5,
    key: 1.4,
    rim: "#2C3826",
  },
};

/** One thin metallic torus. */
function Ring({
  color,
  emissive,
  emissiveIntensity,
  radius,
  tube,
  ...props
}: {
  color: string;
  emissive: string;
  emissiveIntensity: number;
  radius: number;
  tube: number;
} & ThreeElements["mesh"]) {
  return (
    <mesh {...props}>
      <torusGeometry args={[radius, tube, 28, 160]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        metalness={0.85}
        roughness={0.28}
      />
    </mesh>
  );
}

/**
 * Two overlapping concentric-ring clusters — the wordmark "oo".
 * Kept front-facing (like the flat logo) with only a gentle sway + pointer tilt,
 * so it always reads as the double-O rather than spinning to edge-on.
 */
function Rings({
  theme,
  reduce,
  offsetX,
}: {
  theme: RingsTheme;
  reduce: boolean;
  offsetX: number;
}) {
  const tilt = useRef<Group>(null);
  const sway = useRef<Group>(null);
  const p = PALETTES[theme];

  // Clusters sit close enough that the outer rings overlap, mirroring the logo.
  const clusters = useMemo(() => [{ x: -0.82 }, { x: 0.82 }], []);

  useFrame((state, delta) => {
    if (reduce) return;
    const t = state.clock.elapsedTime;
    if (sway.current) {
      // Small-amplitude sway → a hint of depth, never turning edge-on.
      sway.current.rotation.y = Math.sin(t * 0.3) * 0.16;
      sway.current.rotation.x = Math.cos(t * 0.24) * 0.1;
    }
    if (tilt.current) {
      // Ease toward the pointer for a parallax tilt (gentle, stays front-facing).
      tilt.current.rotation.y = MathUtils.lerp(
        tilt.current.rotation.y,
        state.pointer.x * 0.2,
        0.05,
      );
      tilt.current.rotation.x = MathUtils.lerp(
        tilt.current.rotation.x,
        -state.pointer.y * 0.14,
        0.05,
      );
      void delta;
    }
  });

  return (
    <group ref={tilt} position={[offsetX, 0, 0]} rotation={[0.06, 0, 0]}>
      <group ref={sway}>
        {clusters.map((c, i) => (
          <group key={i} position={[c.x, 0, 0]}>
            <Ring
              color={p.rings[0]}
              emissive={p.emissive}
              emissiveIntensity={p.emissiveIntensity}
              radius={1.0}
              tube={0.058}
            />
            <Ring
              color={p.rings[1]}
              emissive={p.emissive}
              emissiveIntensity={p.emissiveIntensity}
              radius={0.66}
              tube={0.05}
            />
          </group>
        ))}
      </group>
    </group>
  );
}

/** Client-only R3F canvas. Mounted lazily by RingsBackground when in view. */
export default function RingsScene({
  theme = "dark",
  reduce = false,
  offsetX = 0,
}: {
  theme?: RingsTheme;
  reduce?: boolean;
  offsetX?: number;
}) {
  const p = PALETTES[theme];
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      frameloop={reduce ? "demand" : "always"}
    >
      <ambientLight intensity={p.ambient} />
      <directionalLight position={[4, 5, 6]} intensity={p.key} color="#FFF6E0" />
      <directionalLight position={[-5, -2, 2]} intensity={0.5} color={p.rim} />
      <Rings theme={theme} reduce={reduce} offsetX={offsetX} />
    </Canvas>
  );
}
