// src/pages/PrivacyPolicy.tsx
import React from 'react';
import '../assets/css/PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>CardCounter Privacy Policy</h1>
          <p className="effective-date">Last Updated: October 30, 2025</p>
          <div className="app-info">
            <p><strong>Developer:</strong> Carvum Limited</p>
            <p><strong>App:</strong> CardCounter – Educational Training Tool</p>
            <p><strong>Version:</strong> 1.0</p>
          </div>
        </header>

        <main className="privacy-content">
          <section className="privacy-section">
            <p className="intro-text">
              Carvum Limited ("we," "our," "us") respects your privacy. This policy explains how the 
              <strong> CardCounter</strong> app collects, uses, and protects information. CardCounter is an 
              educational training tool focused on probabilistic thinking and pattern recognition. It does 
              <strong> not</strong> involve gambling or real-money play.
            </p>
          </section>

          <section className="privacy-section">
            <h2>1. Information We Collect</h2>
            
            <h3>Guest Mode</h3>
            <ul>
              <li>No personal data is collected or transmitted.</li>
              <li>All progress (XP, coins, themes, streaks, drills) is stored <strong>locally on your device</strong> using Apple Core Data.</li>
              <li>We do <strong>not</strong> access, transmit, or back up guest data.</li>
            </ul>

            <h3>Authenticated Mode</h3>
            <p>If you choose to <strong>Sign in with Apple</strong>, we receive:</p>
            <ul>
              <li>An anonymized Apple ID identifier (no password or email shared unless you consent).</li>
              <li>Basic profile data you create (username, region, optional bio).</li>
            </ul>
            <p>We use <strong>AWS Amplify</strong> (Cognito, AppSync, DynamoDB) to sync:</p>
            <ul>
              <li>Training progress, purchased themes, subscription status, and profile statistics.</li>
              <li>Data is encrypted in transit (HTTPS/TLS) and at rest (AWS-managed encryption).</li>
            </ul>

            <h3>Subscription Data</h3>
            <p>
              Purchases are handled entirely by <strong>Apple StoreKit 2</strong>. We do <strong>not</strong> collect 
              or store your payment information. Apple provides us only with anonymous transaction identifiers needed 
              to confirm your active subscription.
            </p>

            <h3>Analytics & Tracking</h3>
            <p>
              CardCounter contains <strong>no third-party analytics, advertising SDKs, or trackers</strong>. 
              We do not share data with external parties.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To store and display your training progress.</li>
              <li>To enable cross-device sync for authenticated users.</li>
              <li>To validate premium membership and restore purchases.</li>
              <li>To provide optional cloud backup and technical support.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Data Retention</h2>
            <ul>
              <li><strong>Guest data</strong> remains only on your device and is deleted if you uninstall the app.</li>
              <li><strong>Cloud data</strong> remains until you delete your account or request erasure.</li>
              <li>You may delete your cloud profile anytime through the in-app "Delete Account" option.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Your Rights</h2>
            <p>You may:</p>
            <ul>
              <li>Access, correct, or delete your data by contacting us at <a href="mailto:vhalan@pm.me">vhalan@pm.me</a>.</li>
              <li>Withdraw consent by logging out or deleting your account.</li>
              <li>Request full data deletion under applicable privacy laws (GDPR, UK DPA, CCPA).</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Children's Privacy</h2>
            <p>
              CardCounter is intended for users <strong>aged 13 and above</strong>. We do not knowingly 
              collect data from children under 13.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Data Security</h2>
            <ul>
              <li>AWS Cognito authentication with Sign in with Apple ensures secure log-in.</li>
              <li>All communication uses HTTPS/TLS encryption.</li>
              <li>We regularly review security configurations and permissions.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>7. Third-Party Services</h2>
            <div className="services-table">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Apple StoreKit 2</strong></td>
                    <td>Handles in-app purchases and subscriptions</td>
                    <td>Anonymous transaction IDs</td>
                  </tr>
                  <tr>
                    <td><strong>Apple Sign in with Apple</strong></td>
                    <td>Authentication</td>
                    <td>Anonymized Apple ID</td>
                  </tr>
                  <tr>
                    <td><strong>AWS Amplify / AppSync / DynamoDB</strong></td>
                    <td>Cloud sync and storage</td>
                    <td>Profile + training data</td>
                  </tr>
                  <tr>
                    <td><strong>Core Data (Apple)</strong></td>
                    <td>Local persistence</td>
                    <td>Local-only progress data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="privacy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this policy to reflect new features or legal requirements. Revised versions 
              are posted at <a href="https://carvum.life/privacyc/" target="_blank" rel="noopener noreferrer">https://carvum.life/privacyc/</a>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Contact Us</h2>
            <div className="contact-info">
              <p><strong>Carvum Limited</strong></p>
              <p>Email: <a href="mailto:vhalan@pm.me">vhalan@pm.me</a></p>
              <p>Website: <a href="https://carvum.life" target="_blank" rel="noopener noreferrer">https://carvum.life</a></p>
            </div>
          </section>

          <section className="privacy-section summary-section">
            <h2>Summary</h2>
            <p className="summary-text">
              CardCounter stores guest progress locally, syncs optional user data securely via AWS, 
              processes payments only through Apple, and never tracks or sells your information. 
              Your data stays private, encrypted, and under your control.
            </p>
          </section>

          <section className="privacy-section disclaimer">
            <h2>Educational Disclaimer</h2>
            <p className="disclaimer-text">
              <strong>CardCounter is an educational tool for probability and mental arithmetic practice. 
              It is not intended for casino use or to promote gambling.</strong>
            </p>
          </section>
        </main>

        <footer className="privacy-footer">
          <p>© 2025 Carvum Limited. All rights reserved.</p>
          <p>Last updated: October 30, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
