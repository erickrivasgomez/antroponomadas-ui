import * as THREE from 'three';

// Three.js Particle System
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

const initParticles = () => {
  const canvas = document.getElementById("particles-canvas");

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ 
    canvas, 
    alpha: true,
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Create particles
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const velocities = [];

  const particleCount = window.innerWidth < 768 ? 1000 : 2000;

  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * 2000 - 1000;
    const y = Math.random() * 2000 - 1000;
    const z = Math.random() * 2000 - 1000;

    vertices.push(x, y, z);
    velocities.push(
      (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.3
    );
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("velocity", new THREE.Float32BufferAttribute(velocities, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Event listeners for mouse movement
  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('touchstart', onDocumentTouchStart);
  document.addEventListener('touchmove', onDocumentTouchMove);
  window.addEventListener('resize', onWindowResize);
};

const onDocumentMouseMove = (event) => {
  mouseX = (event.clientX - windowHalfX) * 0.05;
  mouseY = (event.clientY - windowHalfY) * 0.05;
};

const onDocumentTouchStart = (event) => {
  if (event.touches.length === 1) {
    mouseX = (event.touches[0].pageX - windowHalfX) * 0.05;
    mouseY = (event.touches[0].pageY - windowHalfY) * 0.05;
  }
};

const onDocumentTouchMove = (event) => {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = (event.touches[0].pageX - windowHalfX) * 0.05;
    mouseY = (event.touches[0].pageY - windowHalfY) * 0.05;
  }
};

const onWindowResize = () => {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

const render = () => {
  if (!particles) return;

  const time = Date.now() * 0.00005;
  const positions = particles.geometry.attributes.position.array;
  const velocities = particles.geometry.attributes.velocity.array;

  // Update particle positions
  for (let i = 0; i < positions.length; i += 3) {
    // Apply velocity (increased speed by multiplying by 1.5)
    positions[i] += velocities[i] * 1.5;
    positions[i + 1] += velocities[i + 1] * 1.5;
    positions[i + 2] += velocities[i + 2] * 1.5;

    // Bounce off boundaries (reduced boundary size for more movement)
    if (Math.abs(positions[i]) > 800) velocities[i] *= -1.1; // Added slight acceleration on bounce
    if (Math.abs(positions[i + 1]) > 800) velocities[i + 1] *= -1.1;
    if (Math.abs(positions[i + 2]) > 800) velocities[i + 2] *= -1.1;
  }

  particles.geometry.attributes.position.needsUpdate = true;

  // Rotate particles
  particles.rotation.x = time * 0.1;
  particles.rotation.y = time * 0.15;

  // Add mouse movement effect
  particles.rotation.x += (mouseY - particles.rotation.x) * 0.01;
  particles.rotation.y += (mouseX - particles.rotation.y) * 0.01;

  renderer.render(scene, camera);
};

export { initParticles, animate };
