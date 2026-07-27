import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
uniform float uTime;
varying vec2 vUv;

void main() {
    // Subtle, elegant gradient mix
    vec3 color1 = vec3(0.0, 0.2, 0.6); // Deep EU Blue
    vec3 color2 = vec3(0.18, 0.22, 0.28); // Warm Slate
    vec3 color3 = vec3(1.0, 0.8, 0.0); // Federal Gold highlight
    
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    
    vec2 p = vUv * 2.0 - 1.0;
    float time = uTime * 0.1;
    
    // Smooth moving waves
    float wave1 = sin(p.x * 2.0 + time) * cos(p.y * 2.0 + time * 0.8);
    float wave2 = sin(p.y * 3.0 - time * 1.5) * cos(p.x * 1.5 + time * 1.2);
    
    float mixFactor = (wave1 + wave2 + 2.0) * 0.25;
    
    vec3 finalColor = mix(color1, color2, mixFactor);
    finalColor = mix(finalColor, color3, smoothstep(0.8, 1.0, mixFactor) * 0.15); // Subtle gold hint
    
    // Add tiny bit of noise to prevent banding
    finalColor += (noise - 0.5) * 0.02;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const GradientMesh = () => {
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

const ShaderHero = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.15 }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <GradientMesh />
      </Canvas>
    </div>
  );
};

export default ShaderHero;
