
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/Addons.js";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const scale = 3; // Adjust scale factor as needed
    scene.scale.set(scale, scale, scale);

    const Noise = new ImprovedNoise();
    const coords = [];
    const colors = [];
    const numCols = 190; // Number of columns
    const numRows = 190; // Number of rows
    const gap = 0.02;
    const offset = { x: -2, y: -2.5 };

    let time = 0;

    for (let i = 0; i < numCols; i++) {
      for (let j = 0; j < numRows; j++) {
        const x =
          offset.x + i * gap + Noise.noise(i * 0.1, j * 0.1, time) * 0.01;
        const y =
          offset.y + j * gap + Noise.noise(i * 0.1, j * 0.1, time) * 0.01;
        const noiseValue = Noise.noise(x * 1, y * 1, time);
        const z = noiseValue;
        let color;
        if (z < 0.15) {
          color = new THREE.Color("#1F2425");
        } else if (z < 0.55) {
          color = new THREE.Color("#474F4F");
        } else {
          color = new THREE.Color("#BBBEAC");
        }
        coords.push(x, y, z);
        colors.push(color.r, color.g, color.b);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(coords, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({ size: 0.01, vertexColors: true });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const sunlight = new THREE.DirectionalLight(0xffffff);
    sunlight.position.y = 2;
    scene.add(sunlight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      const positions = geo.getAttribute("position");
      const colorAttribute = geo.getAttribute("color");
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const noiseValue = Noise.noise(x * 1, y * 1, time);
        const z = noiseValue;
        positions.setZ(i, z);
        let color;
        if (z < 0.15) {
          color = new THREE.Color("#1F2425");
        } else if (z < 0.55) {
          color = new THREE.Color("#838F8E");
        } else {
          color = new THREE.Color("#BABDAC");
        }
        colorAttribute.setXYZ(i, color.r, color.g, color.b);
      }
      positions.needsUpdate = true;
      colorAttribute.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
      scene.clear();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
