import { renderer, camera, scene } from './scene.js';
import * as THREE from 'three';

let clock = new THREE.Clock(); // Clock for time-based animations

export const animate = (model) => {
  requestAnimationFrame(() => animate(model));

  if (model) {
    const time = clock.getElapsedTime(); // Time elapsed since the clock started

    // Adjust the base position to lower the animation path
    const baseY = -10; // Lower starting point for vertical movement
    const baseZ = -75; // Lower starting point for depth movement

    // Circular showcase movement with base position adjustment
    const radius = 30; // Radius of the circular motion
    const speed = 0.2; // Speed of the circular motion
    model.position.x = Math.cos(time * speed) * radius; // Circular X motion
    model.position.z = baseZ + Math.sin(time * speed) * radius; // Circular Z motion
    model.position.y = baseY + Math.sin(time * 0.5) * 5; // Gentle up-and-down motion (Y)

    // Smooth rotation to showcase all angles
    const rotationSpeed = 0.01; // Rotation speed multiplier
    model.rotation.x += Math.sin(time * 0.3) * rotationSpeed; // Smooth tilt on X
    model.rotation.y += rotationSpeed; // Continuous rotation on Y
    model.rotation.z += Math.cos(time * 0.3) * rotationSpeed; // Smooth tilt on Z
  }

  renderer.render(scene, camera);
};
