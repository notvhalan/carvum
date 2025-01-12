import { renderer, camera, scene } from './scene.js';
import * as THREE from 'three';

let clock = new THREE.Clock(); // Clock for time-based animations

export const animate = (model) => {
  requestAnimationFrame(() => animate(model));

  if (model) {
    const time = clock.getElapsedTime(); // Time elapsed since the clock started

    // Adjust this value to lower the entire animation path
    const baseY = -10; // Lower starting point for the plane
    const baseZ = -75; // Lower starting point for the plane


    // Figure-eight motion
    const radius = 15; // Radius of the motion
    model.position.x = Math.sin(time) * radius; // Horizontal movement (X)
    model.position.y = baseY + Math.sin(time * 2) * radius * 0.5; // Vertical movement (Y)
    model.position.z = baseZ + Math.sin(time * 0.5) * 5; // Depth oscillation (Z)

    // Subtle tilting based on position
    model.rotation.x = Math.sin(time * 0.5) * 0.2; // Forward-backward tilt
    model.rotation.y = Math.cos(time * 0.5) * 0.2; // Left-right tilt
    model.rotation.z = Math.sin(time) * 0.1; // Roll tilt
  }


  renderer.render(scene, camera);

};
