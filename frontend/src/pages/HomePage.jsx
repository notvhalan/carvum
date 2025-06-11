// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react'; // Import useState
import { scene, camera, renderer } from '../three/scene';
import { addLights } from '../three/lights';
import { loadModel } from '../three/modelLoader';
import { addBackgroundCrosses } from '../three/background';
import { animate } from '../three/animation';
import { addBackgroundElements } from '../three/bgtext.js';

import Navbar from '../components/Navbar';
import OurBusinessesSection from '../components/OurBusinessesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import bibsu4 from '/videos/bibsu4.mp4';

import '../assets/css/HomePage.css';

import jetsketch1Path from '../assets/models/plane2.glb';

import useBouncingVideo from '../assets/js/useBouncingVideo'; // The bouncing hook

const HomePage = () => {
    // State to determine if the screen is considered mobile
    const [isMobile, setIsMobile] = useState(false);

    // Initial position for the video.
    // It's good practice to set initial position based on window dimensions
    // if the animation starts immediately.
    const getInitialVideoPosition = () => {
        if (typeof window !== 'undefined') {
            return { x: window.innerWidth * 0.4, y: window.innerHeight * 0.4 };
        }
        return { x: 50, y: 50 }; // Default if window is not defined (e.g., SSR)
    };

    // Determine the speed multiplier based on isMobile state
    // Adjust these values as needed for desired mobile/desktop speed
    const videoSpeedMultiplier = isMobile ? 0.5 : 1.0; // Half speed on mobile, full speed on desktop

    // Initialize the useBouncingVideo hook with the dynamic speed multiplier
    const { position, elementRef } = useBouncingVideo(
        getInitialVideoPosition(),
        { dx: 2, dy: 2 },
        videoSpeedMultiplier
    );

    useEffect(() => {
        const threeContainer = document.getElementById('three-js-bg-container');
        const companyText = document.querySelector('.company-text');

        if (threeContainer && threeContainer.childNodes.length === 0) {
            threeContainer.appendChild(renderer.domElement);

            addLights();
            addBackgroundElements();
            addBackgroundCrosses();

            loadModel(jetsketch1Path, (model) => {
                model.position.set(20, -10, -60);
                model.scale.set(3, 3, 3);
                animate(model);
            });

            animate();
        } else if (!threeContainer) {
            console.error('Container for Three.js background not found.');
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const fadeEnd = window.innerHeight * 0.55;
            const opacity = Math.max(0, 1 - scrollTop / fadeEnd);

            if (companyText) {
                companyText.style.opacity = opacity.toString();
                companyText.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        const checkMobile = () => {
            // Define your mobile breakpoint here
            // This should ideally match your CSS media queries (e.g., max-width: 768px)
            setIsMobile(window.innerWidth <= 768);
        };

        const handleResize = () => {
            if (renderer && camera) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
            checkMobile(); // Also check mobile status on resize
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set size and mobile status

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array, runs once on mount

    return (
        <div className="homepage-scroll-container">
            <Navbar />

            <section
                id="three-js-bg-container"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: -1,
                }}
                aria-label="3D animated background section"
            ></section>

            <div className="content-section-wrapper">
                <div className="hero-section">
                    <div className="company-text">
                        <img className='planesketch' src="/images/planesketch3.png" alt="Plane Sketch" />
                        <h1 className="company-title">Innovate. Create. Elevate.</h1>
                        <p className="company-description">
                            We are a forward-thinking company dedicated to crafting
                            innovative solutions and delivering exceptional service,
                            propelling your vision to new heights.
                        </p>
                    </div>
                </div>

                <OurBusinessesSection />
                <AboutSection />
                <ContactSection />
            </div>

            <div
                ref={elementRef}
                className="bouncing-video-container"
                style={{
                    top: position.y,
                    left: position.x,
                    position: 'fixed',
                }}
            >
                <video
                    src={bibsu4}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="responsive-video"
                />
            </div>
        </div>
    );
};

export default HomePage;