// src/pages/PrivacyPolicy.tsx
import React from 'react';
import '../assets/css/PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Blackjack Bible – Privacy Policy</h1>
          <p className="effective-date">Effective date: October 16, 2025</p>
          <div className="app-info">
            <p><strong>Developer:</strong> Carvum Ltd</p>
            <p><strong>App:</strong> Blackjack Bible – Card Counter Trainer</p>
          </div>
        </header>

        <main className="privacy-content">
          <section className="privacy-section">
            <h2>1. Overview</h2>
            <p>
              Blackjack Bible is an educational mobile application that helps users improve their blackjack card-counting 
              and decision-making skills through simulations, drills, and analytics.
            </p>
            <p>
              We value your privacy and are committed to protecting your personal data. This policy explains what 
              information the app collects, how it is used, and your choices.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            
            <h3>a. Information You Provide</h3>
            <p>
              The app does <strong>not</strong> require account creation or personal information to function. 
              We do not request, store, or process names, emails, or contact details.
            </p>

            <h3>b. Automatically Collected Information</h3>
            <p>
              Blackjack Bible may store certain usage data <strong>locally on your device</strong>, such as:
            </p>
            <ul>
              <li>Training progress, session scores, and preferences</li>
              <li>Simulation settings and in-app statistics</li>
            </ul>
            <p>
              This data never leaves your device unless you explicitly back it up via iCloud or system backup.
            </p>

            <h3>c. Subscription Purchases</h3>
            <p>
              If you subscribe to <em>Blackjack Bible Pro</em>, Apple handles all payment and subscription processing 
              through <strong>App Store Connect / StoreKit</strong>.
            </p>
            <p>
              We do not receive or store your payment details. Apple provides us with anonymized transaction 
              status information only (e.g., active, expired).
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Data</h2>
            <p>Locally stored data is used only to:</p>
            <ul>
              <li>Track your training performance and app usage history</li>
              <li>Provide accurate analytics and progress charts</li>
              <li>Restore your preferences after app updates</li>
            </ul>
            <p>
              We do not share, sell, or transfer your data to any third parties.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Data Storage and Security</h2>
            <ul>
              <li>All user data is stored <strong>securely on-device</strong>.</li>
              <li>We do not maintain external databases or cloud servers for user data.</li>
              <li>iCloud or iOS backup encryption is controlled by Apple.</li>
              <li>If you delete the app, all stored data is permanently erased from your device.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Analytics and Third-Party Services</h2>
            <p>
              Blackjack Bible does <strong>not</strong> use third-party analytics or advertising SDKs 
              (e.g., Google Analytics, Firebase, Meta SDKs).
            </p>
            <p>
              We may use <strong>Apple's built-in analytics</strong> (App Analytics in App Store Connect) 
              to measure aggregate performance such as downloads, crashes, and retention — these reports 
              are anonymized and aggregated by Apple.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Your Rights</h2>
            <p>You can:</p>
            <ul>
              <li>Delete your app data at any time by uninstalling Blackjack Bible.</li>
              <li>Revoke analytics sharing through <strong>iOS Settings → Privacy → Analytics & Improvements</strong>.</li>
              <li>Manage or cancel subscriptions via <strong>App Store → Account → Subscriptions</strong>.</li>
            </ul>
            <p>
              We never retain personally identifiable information, so there is nothing further to request 
              or erase from our systems.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Blackjack Bible is designed for adult users (18+) as an educational simulator for casino 
              mathematics and probability. We do not knowingly collect data from children.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, the updated version will 
              be available in-app and on our website.
            </p>
            <p>
              Significant changes will be clearly communicated within the app.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact:
            </p>
            <div className="contact-info">
              <p><strong>Carvum Ltd</strong></p>
              <p>Email: <a href="mailto:vhalanappstore@icloud.com">vhalanappstore@icloud.com</a></p>
              <p>Website: <a href="https://carvum.life" target="_blank" rel="noopener noreferrer">https://carvum.life</a></p>
            </div>
          </section>

          <section className="privacy-section disclaimer">
            <h2>Educational Disclaimer</h2>
            <p className="disclaimer-text">
              <strong>Blackjack Bible is an educational tool for probability and mental arithmetic practice. 
              It is not intended for casino use or to promote gambling.</strong>
            </p>
          </section>
        </main>

        <footer className="privacy-footer">
          <p>© 2025 Carvum Ltd. All rights reserved.</p>
          <p>Last updated: October 16, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
