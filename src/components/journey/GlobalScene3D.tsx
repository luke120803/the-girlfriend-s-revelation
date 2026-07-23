import { useRef, useMemo, Component, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useAtmosphere } from "@/hooks/useAtmosphere";

class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null; // Silenciosamente falha para o fundo original
    }
    return this.props.children;
  }
}

function FloatingShapes() {
  const { state } = useAtmosphere();
  const meshRef = useRef<THREE.Mesh>(null);

  const color = useMemo(() => {
    switch (state.theme) {
      case "ballet": return "#fcf9f7";
      case "classic": return "#f5e6d3";
      case "artistic": return "#d97706";
      case "marine": return "#0c4a6e";
      default: return "#fcf9f7";
    }
  }, [state.theme]);

  const speed = state.theme === "marine" ? 1 : 2;
  const distort = state.theme === "artistic" ? 0.6 : 0.3;

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          opacity={0.08}
          transparent
          roughness={0}
          attach="material"
        />
      </Sphere>
    </Float>
  );
}

export function GlobalScene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <SceneErrorBoundary>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingShapes />
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
