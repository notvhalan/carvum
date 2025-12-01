// src/pages/EmpathyticsPolicy.tsx
import React from 'react';
import '../assets/css/PrivacyPolicy.css';

const EmpathyticsPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Empathytics Privacy Policy</h1>
          <p>Carvum Limited — Effective December 1, 2025</p>
        </header>

        <main className="privacy-content">
          <section className="privacy-overview">
            <h2>Introduction</h2>
            <p>
              Empathytics is a digital wellness application operated by <strong>Carvum Limited</strong>. 
              Our mission is to help users understand their mood patterns through AI-generated insights 
              based on journaling, wellness check-ins, and optional biometric data from smart rings.
            </p>
            <p>
              <strong>Empathytics is not a medical device and does not diagnose, treat, or cure any 
              mental health or addiction disorders.</strong> It is designed for wellness, emotional 
              insight, and behavioral reflection only.
            </p>
            <p>
              This Privacy Policy explains what data we collect, how we use it, and your rights 
              regarding your personal information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>1. Data We Collect</h2>
            
            <h3>A. User-Provided Data</h3>
            <p>When you use Empathytics, you may provide:</p>
            <ul>
              <li><strong>Journal entries:</strong> Your written reflections and daily logs</li>
              <li><strong>Wellness check-ins:</strong> Self-reported energy levels, sleep quality, stress levels, cravings</li>
              <li><strong>Activity logs:</strong> Flags for activities, food type tracking, water intake, exercise</li>
              <li><strong>Psychometric assessments:</strong> PHQ-9 (depression), GAD-7 (anxiety), AUDIT (alcohol use), DAST (drug use)</li>
              <li><strong>Account information:</strong> Email address and authentication data via AWS Cognito</li>
            </ul>

            <h3>B. Automatically Collected Data</h3>
            <ul>
              <li><strong>Device information:</strong> Device type, operating system (Android/iOS), app version</li>
              <li><strong>Usage analytics:</strong> Feature usage patterns, timestamps, session duration</li>
              <li><strong>Crash logs:</strong> Technical diagnostics to improve app stability</li>
            </ul>

            <h3>C. Biometric & Sensor Data (Optional)</h3>
            <p>
              If you connect a smart ring or wearable device via Bluetooth Low Energy (BLE), 
              we may collect:
            </p>
            <ul>
              <li><strong>Heart rate (HR)</strong></li>
              <li><strong>Heart rate variability (HRV)</strong></li>
              <li><strong>Blood oxygen saturation (SpO₂)</strong></li>
              <li><strong>Sleep stages</strong> and sleep duration</li>
              <li><strong>Steps, distance, active energy</strong></li>
              <li><strong>BLE connection metadata</strong></li>
            </ul>
            <p>
              <em>All biometric data collection is optional. You can use Empathytics without 
              connecting any wearable device.</em>
            </p>

            <h3>D. AI-Derived Data</h3>
            <p>
              Our AI model processes your data to generate mood insights and emotional patterns:
            </p>
            <ul>
              <li><strong>Valence and arousal predictions:</strong> Numerical estimates of emotional states</li>
              <li><strong>Mood pattern analysis:</strong> Trends over time based on your inputs</li>
              <li><strong>Relapse-risk features:</strong> Behavioral indicators for wellness monitoring</li>
              <li><strong>Journaling embeddings:</strong> Text converted to numerical vectors for analysis</li>
              <li><strong>AI explanations:</strong> Insights into why your mood may have changed</li>
            </ul>
            <p>
              <strong>Important:</strong> These predictions are probabilistic estimates, not medical 
              diagnoses. The AI can make mistakes and should not be used as a substitute for 
              professional medical advice.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. How Your Data Is Used</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide mood predictions and emotional pattern insights</li>
              <li>Generate relapse-risk awareness and wellness tracking</li>
              <li>Analyze journaling content for emotional themes</li>
              <li>Display personalized wellness charts and visualizations</li>
              <li>Maintain your sobriety streaks and assessment history</li>
              <li>Improve AI model accuracy through aggregated, anonymized analysis</li>
              <li>Sync your data securely across your devices</li>
              <li>Provide technical support and troubleshoot issues</li>
            </ul>
            <p>
              <strong>We never use your data for advertising or sell it to third parties.</strong>
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Data Storage & Security</h2>
            <p>Your data is stored securely using industry-standard cloud infrastructure:</p>
            <ul>
              <li><strong>AWS Amplify Gen 2:</strong> Application backend framework</li>
              <li><strong>AWS Cognito:</strong> Secure user authentication and authorization</li>
              <li><strong>Amazon DynamoDB:</strong> Encrypted database storage for all user data</li>
              <li><strong>Amazon EC2:</strong> Secure servers for AI model inference</li>
              <li><strong>HTTPS/TLS encryption:</strong> All data transmitted between your device and our servers is encrypted</li>
              <li><strong>Local BLE processing:</strong> Biometric data from your smart ring is processed locally on your device when possible</li>
            </ul>
            <p>
              All data is encrypted both in transit and at rest. We implement strict access controls 
              to ensure only authorized personnel can access backend systems for maintenance and support.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Data Sharing</h2>
            <p>We are committed to protecting your privacy:</p>
            <ul>
              <li><strong>No sale of personal data:</strong> We will never sell your information</li>
              <li><strong>No third-party advertising:</strong> Your data is not shared with advertisers</li>
              <li><strong>Cloud infrastructure only:</strong> Third parties (AWS) are used strictly for hosting and storage</li>
              <li><strong>Journal privacy:</strong> Your journal content is never shared with any external party</li>
              <li><strong>Legal compliance:</strong> We may disclose data only when required by law or to protect user safety</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Your Rights & Choices</h2>
            <p>You have complete control over your data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of all your personal data</li>
              <li><strong>Export:</strong> Download your journals, assessments, and wellness data</li>
              <li><strong>Delete:</strong> Request complete deletion of your account and all associated data</li>
              <li><strong>Withdraw permissions:</strong> Disconnect your smart ring at any time</li>
              <li><strong>Use without biometrics:</strong> All core features work without a wearable device</li>
              <li><strong>Correct data:</strong> Edit or update your profile and wellness information</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:carvum@pm.me">carvum@pm.me</a>
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Data Retention</h2>
            <p>We retain your data according to the following schedule:</p>
            <ul>
              <li><strong>Journal entries:</strong> Retained until you delete your account or individual entries</li>
              <li><strong>Biometric data:</strong> Kept for historical analytics and trend visualization</li>
              <li><strong>Psychometric scores:</strong> Retained with timestamps for progress tracking</li>
              <li><strong>Crash logs:</strong> Automatically deleted after 30 days</li>
              <li><strong>Deleted accounts:</strong> All data removed from DynamoDB and backups within 30 days of deletion request</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Empathytics is designed for users aged <strong>16 and older</strong>. We do not 
              knowingly collect data from children under 16. If we discover that a user under 16 
              has created an account, we will promptly delete it and all associated data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. AI Transparency</h2>
            <p>Understanding how our AI works:</p>
            <ul>
              <li>Mood predictions are <strong>probabilistic estimates</strong>, not certainties</li>
              <li>The AI analyzes patterns in your biometrics, journaling, and wellness check-ins</li>
              <li>Predictions are based on correlations and may not reflect causation</li>
              <li>The model <strong>can make mistakes</strong> and should be used as one tool among many</li>
              <li>AI-generated insights are <strong>not medical advice</strong></li>
              <li>You should always use your own judgment when making health decisions</li>
              <li>If you're experiencing a mental health crisis, contact a healthcare professional immediately</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>9. Non-Medical Disclaimer</h2>
            <div className="summary-section">
              <h3>Important Legal Notice</h3>
              <p>
                <strong>Empathytics is NOT a medical device.</strong>
              </p>
              <ul>
                <li>It does not diagnose any mental health condition</li>
                <li>It does not treat depression, anxiety, addiction, or any medical disorder</li>
                <li>It does not cure or prevent any disease</li>
                <li>It is designed solely for wellness tracking, emotional insight, and behavioral reflection</li>
                <li>Always consult qualified healthcare professionals for medical advice</li>
                <li>In case of emergency, contact emergency services immediately</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your data may be transferred to and stored on servers located outside your country 
              of residence. AWS operates data centers globally, and your data may be processed in 
              regions where AWS services are available.
            </p>
            <p>
              By using Empathytics, you consent to these transfers. We ensure all transfers comply 
              with applicable data protection laws and maintain appropriate security safeguards.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, or legal requirements. When we do:
            </p>
            <ul>
              <li>The updated policy will be posted in the app and at carvum.life/empathticspolicy</li>
              <li>The "Effective Date" at the top will be updated</li>
              <li>For material changes, we will notify you via email or in-app notification</li>
              <li>Continued use after changes constitutes acceptance of the updated policy</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>12. Contact Information</h2>
            <div className="contact-info">
              <p><strong>Carvum Limited</strong></p>
              <p>Website: <a href="https://carvum.life" target="_blank" rel="noopener noreferrer">https://carvum.life</a></p>
              <p>Email: <a href="mailto:carvum@pm.me">carvum@pm.me</a></p>
              <p>Instagram: <a href="https://www.instagram.com/amusementsgroundsstagnating" target="_blank" rel="noopener noreferrer">@amusementsgroundsstagnating</a></p>
            </div>
            <p style={{ marginTop: '20px' }}>
              If you have any questions about this Privacy Policy, data protection, or would like 
              to exercise your rights, please contact us at <a href="mailto:carvum@pm.me">carvum@pm.me</a>.
            </p>
            <p>
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </section>
        </main>

        <footer className="privacy-footer">
          <p>© 2025 Carvum Limited. All rights reserved.</p>
          <p>Last updated: December 1, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default EmpathyticsPolicy;
