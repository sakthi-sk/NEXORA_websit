import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Ring } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      // React to mouse
      meshRef.current.position.x = position[0] + mouse.x * 0.5;
      meshRef.current.position.y = position[1] + mouse.y * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 32]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={3}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  );
}

function AnimatedBox({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x = position[0] - mouse.x * 0.3;
      meshRef.current.position.y = position[1] - mouse.y * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.8}>
      <Box ref={meshRef} args={[1, 1, 1]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.4}
          metalness={0.6}
        />
      </Box>
    </Float>
  );
}

function AnimatedRing({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
      <Ring ref={meshRef} args={[0.8, 1, 32]} scale={scale} position={position}>
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
          roughness={0.3}
          metalness={0.8}
        />
      </Ring>
    </Float>
  );
}

function ParticleRing() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3 + Math.random() * 0.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00D4FF"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#00D4FF" />
      <pointLight position={[5, -5, -5]} intensity={0.5} color="#D946EF" />

      <AnimatedSphere position={[-2.5, 0.5, -2]} color="#00D4FF" scale={0.8} />
      <AnimatedTorus position={[2.5, -0.5, -3]} color="#3B82F6" scale={0.6} />
      <AnimatedBox position={[0, 1.5, -4]} color="#8B5CF6" scale={0.5} />
      <AnimatedRing position={[-1.5, -1.5, -3]} color="#D946EF" scale={1} />
      <AnimatedSphere position={[3, 1, -5]} color="#00B8D9" scale={0.4} />
      
      <ParticleRing />
    </>
  );
}

interface Scene3DProps {
  className?: string;
}

export default function Scene3D({ className = '' }: Scene3DProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
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
