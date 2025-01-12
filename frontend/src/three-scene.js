import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
scene.background = null;

// Adjust camera FOV and position to ensure the plane stays visible
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10); // Move camera slightly back for a larger view

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

let currentModel = null; // Track the currently loaded model

function addbackgroundsquares() {
  // add background squares
}
export const loadModel = (modelPath, onLoadCallback) => {
  const loader = new GLTFLoader();
  loader.load(
    modelPath,
    (gltf) => {
      if (currentModel) {
        scene.remove(currentModel);
      }

      currentModel = gltf.scene;

      // Center and scale the model
      currentModel.position.set(0, 0, 0);
      currentModel.scale.set(2, 2, 2); // Make the model larger

      currentModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(currentModel);
      if (onLoadCallback) onLoadCallback(currentModel);
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );
};

export const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

export const getRenderer = () => renderer;
export const getScene = () => scene;
export const getCamera = () => camera;
