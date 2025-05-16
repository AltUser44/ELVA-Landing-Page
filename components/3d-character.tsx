"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function Character3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 10, 10)
    scene.add(directionalLight)

    // Create character
    const group = new THREE.Group()
    scene.add(group)

    // Body
    const bodyGeometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8)
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x7c3aed })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    body.position.y = 0
    group.add(body)

    // Head
    const headGeometry = new THREE.SphereGeometry(0.4, 32, 32)
    const headMaterial = new THREE.MeshStandardMaterial({ color: 0xffd3b5 })
    const head = new THREE.Mesh(headGeometry, headMaterial)
    head.position.y = 1.1
    group.add(head)

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.08, 32, 32)
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
    leftEye.position.set(-0.15, 1.15, 0.35)
    group.add(leftEye)

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
    rightEye.position.set(0.15, 1.15, 0.35)
    group.add(rightEye)

    // Arms
    const armGeometry = new THREE.CapsuleGeometry(0.12, 0.8, 4, 8)
    const armMaterial = new THREE.MeshStandardMaterial({ color: 0x7c3aed })

    const leftArm = new THREE.Mesh(armGeometry, armMaterial)
    leftArm.position.set(-0.7, 0.2, 0)
    leftArm.rotation.z = Math.PI / 16
    group.add(leftArm)

    const rightArm = new THREE.Mesh(armGeometry, armMaterial)
    rightArm.position.set(0.7, 0.2, 0)
    rightArm.rotation.z = -Math.PI / 16
    group.add(rightArm)

    // Legs
    const legGeometry = new THREE.CapsuleGeometry(0.15, 0.8, 4, 8)
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })

    const leftLeg = new THREE.Mesh(legGeometry, legMaterial)
    leftLeg.position.set(-0.25, -1, 0)
    group.add(leftLeg)

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial)
    rightLeg.position.set(0.25, -1, 0)
    group.add(rightLeg)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)

      time += 0.03

      // Wave right arm
      rightArm.rotation.z = -Math.PI / 16 + Math.sin(time * 2) * 0.5

      // Slight body movement
      group.position.y = Math.sin(time) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-24" />
}
