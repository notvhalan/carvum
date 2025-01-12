import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { scene } from './scene.js';

let currentModel = null;

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
      currentModel.scale.set(1, 1, 1);

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
