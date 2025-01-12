import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { scene } from './scene.js';

export const addBackgroundElements = () => {
  const fontLoader = new FontLoader();

  // Load the font
  fontLoader.load(
    'https://threejs.org/examples/fonts/gentilis_bold.typeface.json',
    (font) => {
      // Create the text geometry
      const textGeometry = new TextGeometry('Carvum \n Group', {
        font: font,
        size: 10, // Size of the text
        depth: 0.11, // Thickness of the text
        curveSegments: 12, // Curve smoothness
      });

      // Create a material for the text
      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0x000000, // Black color
        specular: 0xffffff, // Specular highlight
        shininess: 30, // Shininess of the material
      });

      // Combine geometry and material into a mesh
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Initial position for the text
      textMesh.position.set(-60, 10, -50); // Adjust for your scene
      textMesh.rotation.set(0, 0, 0); // No rotation by default

      // Add the text to the scene
      scene.add(textMesh);

      // Scroll-based animation
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Calculate scroll progress as a percentage (0 to 1)
        const scrollProgress = scrollTop / scrollHeight;

        // Adjust the Y position of the text based on scroll progress
        textMesh.position.y = 10 + scrollProgress * 100; // Adjust the range for scrolling
      });
    },
    undefined,
    (error) => {
      console.error('Error loading font:', error);
    }
  );
};
