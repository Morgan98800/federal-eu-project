import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function EUGlobe3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth || 450
    const height = container.clientHeight || 450

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 240

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 2. 3D Globe Group
    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    // Base Sphere with dark blue wireframe/dots
    const sphereGeo = new THREE.SphereGeometry(70, 48, 48)
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x003399,
      emissive: 0x0a194f,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    })
    const baseSphere = new THREE.Mesh(sphereGeo, sphereMat)
    globeGroup.add(baseSphere)

    // Inner Glowing Core
    const coreGeo = new THREE.SphereGeometry(66, 32, 32)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x5e2a96,
      transparent: true,
      opacity: 0.25
    })
    const innerCore = new THREE.Mesh(coreGeo, coreMat)
    globeGroup.add(innerCore)

    // 3. Particle Swarm (Golden & Blue Stars)
    const particleCount = 600
    const particlesGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const colorGold = new THREE.Color(0xffcc00)
    const colorBlue = new THREE.Color(0x3b82f6)
    const colorPurple = new THREE.Color(0x9d4edd)

    for (let i = 0; i < particleCount; i++) {
      const radius = 72 + Math.random() * 25
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const randColor = Math.random()
      const c = randColor > 0.6 ? colorGold : randColor > 0.3 ? colorBlue : colorPurple
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particlesMat = new THREE.PointsMaterial({
      size: 2.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    })
    const particleSystem = new THREE.Points(particlesGeo, particlesMat)
    globeGroup.add(particleSystem)

    // 4. Orbiting EU 12 Stars Ring
    const starRingGroup = new THREE.Group()
    const starCount = 12
    const ringRadius = 100

    const starShape = new THREE.Shape()
    const outerR = 3.5, innerR = 1.5
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? outerR : innerR
      const a = (i * Math.PI) / 5 - Math.PI / 2
      const x = r * Math.cos(a)
      const y = r * Math.sin(a)
      if (i === 0) starShape.moveTo(x, y)
      else starShape.lineTo(x, y)
    }
    starShape.closePath()

    const starGeo = new THREE.ShapeGeometry(starShape)
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xffcc00,
      side: THREE.DoubleSide
    })

    for (let i = 0; i < starCount; i++) {
      const angle = (i / starCount) * Math.PI * 2
      const starMesh = new THREE.Mesh(starGeo, starMat)
      starMesh.position.x = Math.cos(angle) * ringRadius
      starMesh.position.y = Math.sin(angle) * ringRadius
      starMesh.position.z = Math.sin(angle * 2) * 15
      starRingGroup.add(starMesh)
    }
    starRingGroup.rotation.x = Math.PI / 3
    globeGroup.add(starRingGroup)

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x5e2a96, 2, 300)
    pointLight1.position.set(100, 100, 100)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x003399, 2, 300)
    pointLight2.position.set(-100, -100, 100)
    scene.add(pointLight2)

    // 6. Interactive Mouse Drag / Tilt
    let mouseX = 0, mouseY = 0
    let targetX = 0, targetY = 0

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1
      mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // 7. Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Rotate Globe & Ring
      globeGroup.rotation.y = elapsedTime * 0.2
      starRingGroup.rotation.z = elapsedTime * 0.4
      particleSystem.rotation.y = -elapsedTime * 0.1

      // Mouse Lerp Smooth Movement
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05
      globeGroup.rotation.x = targetY * 0.4
      globeGroup.rotation.z = targetX * 0.2

      renderer.render(scene, camera)
    }

    animate()

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '450px',
        position: 'relative',
        cursor: 'grab'
      }}
    />
  )
}
