import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed = 1, distort = 0.3, scale = 1, shape = 'sphere' }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
  shape?: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const ShapeComponent = useMemo(() => {
    switch (shape) {
      case 'torus':
        return (
          <Torus ref={meshRef} args={[1, 0.4, 16, 32]} scale={scale}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Torus>
        );
      case 'icosahedron':
        return (
          <Icosahedron ref={meshRef} args={[1, 1]} scale={scale}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Icosahedron>
        );
      case 'octahedron':
        return (
          <Octahedron ref={meshRef} args={[1, 0]} scale={scale}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Octahedron>
        );
      default:
        return (
          <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        );
    }
  }, [shape, color, distort, scale]);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {ShapeComponent}
      </group>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00E5FF"
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#00E5FF" />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#E040FB" />
      <pointLight position={[0, 5, 5]} intensity={0.4} color="#7C4DFF" />

      {/* Main floating shapes - matching logo gradient exactly */}
      <FloatingShape
        position={[-3.5, 1.5, -2]}
        color="#00E5FF"
        speed={1.1}
        distort={0.45}
        scale={1.3}
        shape="sphere"
      />
      <FloatingShape
        position={[3.5, -0.5, -3]}
        color="#2196F3"
        speed={0.85}
        distort={0.35}
        scale={0.9}
        shape="torus"
      />
      <FloatingShape
        position={[0, 2.5, -4]}
        color="#7C4DFF"
        speed={1.3}
        distort={0.5}
        scale={0.7}
        shape="icosahedron"
      />
      <FloatingShape
        position={[-2.5, -2, -5]}
        color="#E040FB"
        speed={0.7}
        distort={0.25}
        scale={0.6}
        shape="octahedron"
      />
      <FloatingShape
        position={[4.5, 2.5, -6]}
        color="#00BCD4"
        speed={0.95}
        distort={0.4}
        scale={0.8}
        shape="sphere"
      />
      <FloatingShape
        position={[-4, 0, -7]}
        color="#9C27B0"
        speed={0.75}
        distort={0.3}
        scale={0.5}
        shape="torus"
      />

      {/* Particle field */}
      <ParticleField />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
