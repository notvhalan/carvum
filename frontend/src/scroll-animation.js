import { loadModel, animate, getRenderer } from './three-scene';
import jetsketch1Path from './assets/models/plane2.glb';
import jetsketch2Path from './assets/models/plane2.glb';

export const initScrollAnimation = (container) => {
  const renderer = getRenderer();
  container.appendChild(renderer.domElement);

  let currentModel = null;
  const models = [jetsketch1Path, jetsketch2Path];

  const switchModel = (modelPath) => {
    loadModel(modelPath, (loadedModel) => {
      currentModel = loadedModel;
      currentModel.position.set(0, -10, -60);
      currentModel.scale.set(4, 4, 4);
    });
  };

  // Load the initial model
  switchModel(models[0]);

  // Randomly swap models every 5–10 seconds
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * models.length);
    switchModel(models[randomIndex]);
  }, Math.random() * 5000 + 5000);

  // Scroll-based rotation
  const handleScroll = () => {
    if (!currentModel) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollTop / scrollHeight; // Value between 0 and 1

    currentModel.rotation.x = scrollProgress * Math.PI * 2;
    currentModel.rotation.y = scrollProgress * Math.PI * 2;
    currentModel.rotation.z = scrollProgress * Math.PI * 2;
  };

  window.addEventListener('scroll', handleScroll);

  animate();
};
