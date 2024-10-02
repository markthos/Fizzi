"use client";

import { Canvas } from "@react-three/fiber";
import { SodaCan } from "./SodaCan";
import { Environment, Float } from "@react-three/drei";




type Props = {}

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
    style={{
        position: "fixed",
        top: 0,
        left:"50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 30,
    }}
    shadows
    dpr={[1, 1.5]}
    gl={{ antialias: true }}
    camera={{
        fov: 30,
    }}
    >
        <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={7} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-.1, .1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <SodaCan />
        </Float>
        <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </Canvas>
  )
}