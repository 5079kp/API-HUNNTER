import * as THREE from "three"
import { useEffect } from "react"

export default function ThreeBackground() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 5000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000
      )
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    )

    const material = new THREE.PointsMaterial({ color: 0xffffff })
    const stars = new THREE.Points(geometry, material)
    scene.add(stars)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return null
}
