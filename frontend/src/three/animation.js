// animation.js
import { renderer, camera, scene } from './scene.js';
import * as THREE from 'three';

let clock = new THREE.Clock();

// --- "Concorde's Infinity Loop" Animation Parameters ---
const GLOBAL_ANIMATION_SPEED = 0.222; // Overall speed of the animation cycle

// Figure-of-8 Path Parameters
const FIG8_BASE_ANGULAR_SPEED = 2.45; // Base speed for traversing the figure-8 pattern
const FIG8_WIDTH_RADIUS = 70;       // Determines the overall width (X-axis extent) of the figure-8
const FIG8_DEPTH_RADIUS = 40;       // Determines the depth of each lobe (Z-axis extent for sin(2*angle))
const FIG8_Z_PHASE_OFFSET = 0;      // Use this to rotate the figure-8's starting orientation if needed

const ORBIT_CENTER_Y = -2;          // Base altitude for the center of the figure-8
const ORBIT_CENTER_Z = -85;         // Pushes the whole animation further from camera

// Altitude Oscillation (Subtle Y-axis movement)
const ALTITUDE_OSCILLATION_RANGE = 7;  // Total vertical distance it will smoothly move
const ALTITUDE_OSCILLATION_SPEED_FACTOR = 0.3; // Relative to FIG8_BASE_ANGULAR_SPEED

// Rotation Parameters
const YAW_SPIN_SPEED = 0.0030;      // Continuous slow spin on Y-axis

const PITCH_BASE_ANGLE = -0.04;     // Default nose-up attitude (radians)
const PITCH_OSCILLATION_AMOUNT = 0.17; // Max pitch deviation from base
const PITCH_OSCILLATION_SPEED_FACTOR = 0.65; // Relative to FIG8_BASE_ANGULAR_SPEED

const MAX_BANK_ANGLE = 0.78;        // Max bank angle in radians (approx 16 degrees)
// Banking will be linked to the part of the figure-8 that has faster Z-axis changes


export const animate = (model) => {
  requestAnimationFrame(() => animate(model));

  if (model) {
    const elapsedTime = clock.getElapsedTime();
    const animTime = elapsedTime * GLOBAL_ANIMATION_SPEED; // Overall animation time progression

    // Current angle in the base cycle of the figure-8
    const figure8_Angle = animTime * FIG8_BASE_ANGULAR_SPEED;

    // 1. Position - Figure-of-8 Path (Lemniscate of Gerono style)
    // x = R * cos(t)
    // z = R_lobe * sin(2t) (or sin(t)cos(t))
    model.position.x = FIG8_WIDTH_RADIUS * Math.cos(figure8_Angle);
    model.position.z = ORBIT_CENTER_Z + FIG8_DEPTH_RADIUS * Math.sin(2 * figure8_Angle + FIG8_Z_PHASE_OFFSET);

    // Altitude (Y-axis) - gentle oscillation
    model.position.y = ORBIT_CENTER_Y +
                       (ALTITUDE_OSCILLATION_RANGE / 2) * Math.sin(animTime * FIG8_BASE_ANGULAR_SPEED * ALTITUDE_OSCILLATION_SPEED_FACTOR);

    // 2. Orientation
    // a) Yaw: Continuous spin
    model.rotation.y += YAW_SPIN_SPEED;

    // b) Pitch: Base attitude + gentle oscillation
    model.rotation.x = PITCH_BASE_ANGLE +
                       PITCH_OSCILLATION_AMOUNT * Math.sin(animTime * FIG8_BASE_ANGULAR_SPEED * PITCH_OSCILLATION_SPEED_FACTOR);

    // c) Bank (Roll - Z-axis): Coordinated with the figure-8 turns.
    // The "turn" intensity is highest when the z-component of velocity is high.
    // Velocity of z is proportional to cos(2 * figure8_Angle).
    // We want to bank into the turn.
    const bankInput = Math.cos(2 * figure8_Angle + FIG8_Z_PHASE_OFFSET); // Correlates with Z-velocity direction
    model.rotation.z = -bankInput * MAX_BANK_ANGLE;
    // The sign of bankInput determines direction; negative overall makes it bank "inwards"
    // e.g. if z velocity is positive (moving towards +Z), cos(2*angle) is positive, so bank is negative (left roll for right turn).
    // This might need tweaking depending on model orientation and desired "inward" feel.
    // If it banks the wrong way, flip the sign: `bankInput * MAX_BANK_ANGLE`.
  }

  renderer.render(scene, camera);
};