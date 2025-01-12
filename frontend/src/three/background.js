import * as THREE from 'three';
import { scene } from './scene.js';

export const addBackgroundCrosses = () => {
  const crossGeometry = new THREE.BufferGeometry();
  const crossVertices = new Float32Array([
    // Vertical line
    0.0, 1.5, 0,
    0.0, -1.5, 0,
    // Horizontal line
    -1.5, 0.0, 0,
    1.5, 0.0, 0,
  ]);
  crossGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(crossVertices, 3)
  );

  const crossMaterial = new THREE.LineBasicMaterial({
    color: 0x333333, // Dark grey color
    opacity: 0.1, // Slightly visible
    transparent: true, // Allow for opacity
  });

  const gridWidth = 50; // Width of the grid
  const gridHeight = 50; // Height of the grid
  const spacing = 9; // Spacing between crosses

  const crossesGroup = new THREE.Group();

  for (let x = -gridWidth / 2; x <= gridWidth / 2; x++) {
    for (let y = -gridHeight / 2; y <= gridHeight / 2; y++) {
      const cross = new THREE.LineSegments(crossGeometry, crossMaterial);
      cross.position.set(x * spacing, y * spacing, 0); // Individual cross position
      crossesGroup.add(cross);
    }
  }

  // Set the Z position of the entire group to -300
  crossesGroup.position.z = -200;

  // Add the group to the scene
  scene.add(crossesGroup);
};
