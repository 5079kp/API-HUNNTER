import { useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { gsap } from "gsap"
import "./Hero3D.css"

export default function Hero3D() {

  useEffect(() => {
    gsap.from(".hero-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    })

    gsap.from(".hero-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "back.out(1.7)",
    })
  }, [])

  return (
    <section className="hero-section">

      {/* 3D CANVAS */}
      <Canvas camera={{ position: [0, 0, 6] }} className="hero-canvas">
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh rotation={[0.4, 0.6, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#6366f1" />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* TEXT OVERLAY */}
      <div className="hero-overlay">
        <div className="hero-card">
          <h1 className="hero-title">Smart Library</h1>

          <p className="hero-text">
            Firebase powered library management system with modern UI,
            animations and immersive 3D experience.
          </p>

          <button className="hero-btn">
            Get Started
          </button>
        </div>
      </div>

    </section>
  )
}
