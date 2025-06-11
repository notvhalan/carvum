// src/assets/js/useBouncingVideo.js
import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * A custom React hook for making a DOM element bounce around the viewport
 * like the classic DVD logo.
 *
 * @param {object} initialPosition - The initial {x, y} coordinates for the top-left of the element.
 * @param {object} initialVelocity - The initial {dx, dy} velocity (pixels per frame).
 * @param {number} speedMultiplier - A multiplier for the velocity to control animation speed.
 * @returns {object} An object containing:
 * - position: {x, y} - The current {x, y} translation offset of the element.
 * - elementRef: React.MutableRefObject - A ref to be attached to the bouncing DOM element.
 */
const useBouncingVideo = (
    initialPosition = { x: 50, y: 50 },
    initialVelocity = { dx: 2, dy: 2 },
    speedMultiplier = 1
) => {
    const [position, setPosition] = useState(initialPosition);
    const velocityRef = useRef({
        dx: initialVelocity.dx * speedMultiplier,
        dy: initialVelocity.dy * speedMultiplier
    }); // Use ref to avoid re-rendering issues in animation loop
    const elementRef = useRef(null); // Ref to the bouncing DOM element

    useEffect(() => {
        let animationFrameId;

        const animateBounce = () => {
            // Get dimensions for collision detection
            if (!elementRef.current) {
                // If element is not yet rendered, request next frame and wait
                animationFrameId = requestAnimationFrame(animateBounce);
                return;
            }

            const element = elementRef.current;
            const elementWidth = element.offsetWidth;
            const elementHeight = element.offsetHeight;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Update position
            setPosition(prevPos => {
                let newX = prevPos.x + velocityRef.current.dx;
                let newY = prevPos.y + velocityRef.current.dy;
                let currentDx = velocityRef.current.dx;
                let currentDy = velocityRef.current.dy;

                // X-axis collision detection and bounce
                if (newX + elementWidth > viewportWidth) {
                    newX = viewportWidth - elementWidth; // Place at edge
                    currentDx = -Math.abs(currentDx); // Reverse direction
                } else if (newX < 0) {
                    newX = 0; // Place at edge
                    currentDx = Math.abs(currentDx); // Reverse direction
                }

                // Y-axis collision detection and bounce
                if (newY + elementHeight > viewportHeight) {
                    newY = viewportHeight - elementHeight; // Place at edge
                    currentDy = -Math.abs(currentDy); // Reverse direction
                } else if (newY < 0) {
                    newY = 0; // Place at edge
                    currentDy = Math.abs(currentDy); // Reverse direction
                }

                // Update the ref with new velocity values
                velocityRef.current = { dx: currentDx, dy: currentDy };

                return { x: newX, y: newY };
            });

            animationFrameId = requestAnimationFrame(animateBounce);
        };

        // Start the animation loop
        animationFrameId = requestAnimationFrame(animateBounce);

        // Cleanup: stop the animation loop when the component unmounts
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return {
        position,
        elementRef, // The ref to attach to your bouncing DOM element
    };
};

export default useBouncingVideo;