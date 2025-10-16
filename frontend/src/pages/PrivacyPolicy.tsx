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
              Blackjack Bible requires account creation using <strong>Sign in with Apple</strong>. When you sign in, 
              we receive:
            </p>
            <ul>
              <li>A unique Apple user identifier (not your Apple ID)</li>
              <li>Your email address (or Apple's private relay email if you choose to hide your email)</li>
              <li>Your display name (optional, if you choose to share it)</li>
            </ul>
            <p>
              We use <strong>AWS Amplify and Amazon Cognito</strong> to securely manage authentication and user accounts. 
              Apple handles the authentication process, and we never see your Apple ID password.
            </p>

            <h3>b. Automatically Collected Information</h3>
            <p>
              Blackjack Bible stores your usage data securely in the cloud via <strong>AWS (Amazon Web Services)</strong>, including:
            </p>
            <ul>
              <li>Training progress, session scores, and performance statistics</li>
              <li>Simulation settings and user preferences</li>
              <li>Game history and achievement data</li>
              <li>Device information (device type, OS version) for compatibility purposes</li>
            </ul>
            <p>
              This data is encrypted in transit and at rest, and is associated with your Apple user identifier.
            </p>

            <h3>c. Subscription Purchases</h3>
            <p>
              If you subscribe to <em>Blackjack Bible Pro</em>, Apple handles all payment and subscription processing 
              through <strong>App Store Connect / StoreKit</strong>.
            </p>
            <p>
              We do not receive or store your payment details. Apple provides us with anonymized transaction 
              status information only (e.g., active, expired), which we link to your account to enable premium features.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Data</h2>
            <p>Your data is used only to:</p>
            <ul>
              <li>Authenticate your account and maintain your user session</li>
              <li>Sync your training progress, scores, and preferences across devices</li>
              <li>Provide personalized analytics and performance tracking</li>
              <li>Enable premium features for subscribers</li>
              <li>Improve app functionality and user experience</li>
              <li>Send important account and service updates (if you opt in)</li>
            </ul>
            <p>
              We do not share, sell, or transfer your personal data to any third parties for marketing or advertising purposes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Data Storage and Security</h2>
            <ul>
              <li>Your data is stored securely in <strong>AWS (Amazon Web Services)</strong> cloud infrastructure, which complies with industry-standard security practices.</li>
              <li>All data is <strong>encrypted in transit</strong> (using HTTPS/TLS) and <strong>at rest</strong> (using AWS encryption).</li>
              <li>Authentication is managed by <strong>AWS Cognito</strong> with <strong>Sign in with Apple</strong>, providing enterprise-grade security.</li>
              <li>We implement access controls to ensure only authorized personnel can access backend systems.</li>
              <li>AWS data centers are located in secure facilities with redundant backups.</li>
              <li>If you delete your account, your personal data and progress will be permanently removed from our servers within 30 days.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>5. Third-Party Services</h2>
            <p>
              Blackjack Bible uses the following trusted third-party services:
            </p>
            
            <h3>Apple Sign In</h3>
            <ul>
              <li>Handles secure authentication</li>
              <li>Subject to Apple's Privacy Policy</li>
              <li>We receive only limited information (user ID, email, optional name)</li>
            </ul>

            <h3>AWS (Amazon Web Services)</h3>
            <ul>
              <li><strong>AWS Amplify & Cognito:</strong> User authentication and account management</li>
              <li><strong>AWS Cloud Storage:</strong> Secure storage of user data and progress</li>
              <li>AWS complies with SOC, ISO, and other security certifications</li>
              <li>Data is stored in AWS regions with high availability and security</li>
            </ul>

            <h3>Analytics</h3>
            <p>
              We may use <strong>Apple's built-in analytics</strong> (App Analytics in App Store Connect) 
              to measure aggregate performance such as downloads, crashes, and retention — these reports 
              are anonymized and aggregated by Apple.
            </p>
            <p>
              We do <strong>not</strong> use third-party advertising SDKs (e.g., Google Analytics, Facebook SDKs, or ad networks).
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Your Rights</h2>
            <p>You have the following rights regarding your data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data stored in our systems by contacting us.</li>
              <li><strong>Correction:</strong> Update your account information within the app settings.</li>
              <li><strong>Deletion:</strong> Delete your account and all associated data through the app settings or by contacting us. Data will be permanently removed within 30 days.</li>
              <li><strong>Data Portability:</strong> Request an export of your training data and statistics.</li>
              <li><strong>Revoke Sign in with Apple:</strong> Manage or revoke access through <strong>iOS Settings → Apple ID → Sign in with Apple</strong>.</li>
              <li><strong>Manage Subscriptions:</strong> Cancel or modify subscriptions via <strong>App Store → Account → Subscriptions</strong>.</li>
              <li><strong>Opt-out of Analytics:</strong> Disable through <strong>iOS Settings → Privacy → Analytics & Improvements</strong>.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:vhalanappstore@icloud.com">vhalanappstore@icloud.com</a>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide services. Specifically:
            </p>
            <ul>
              <li><strong>Account data:</strong> Retained until you delete your account</li>
              <li><strong>Training progress:</strong> Retained to enable cross-device sync and historical analytics</li>
              <li><strong>Subscription data:</strong> Retained while subscription is active, plus required retention period for financial records</li>
              <li><strong>Deleted accounts:</strong> All personal data permanently deleted within 30 days of account deletion</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Blackjack Bible is designed for adult users (18+) as an educational simulator for casino 
              mathematics and probability. We do not knowingly collect data from children under 13 (or applicable age in your region).
            </p>
            <p>
              If we discover that a child under the applicable age has created an account, we will promptly delete 
              that account and all associated data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. International Data Transfers</h2>
            <p>
              Your data may be transferred to and stored on servers located outside your country of residence. 
              AWS operates data centers globally, and your data may be processed in regions where AWS services are available.
            </p>
            <p>
              By using Blackjack Bible, you consent to the transfer of your data to these locations. 
              We ensure that all data transfers comply with applicable data protection laws and that appropriate 
              safeguards are in place.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we do:
            </p>
            <ul>
              <li>The updated version will be posted in-app and on our website</li>
              <li>The "Effective date" at the top will be updated</li>
              <li>For material changes, we will notify you via in-app notification or email</li>
              <li>Continued use of the app after changes constitutes acceptance of the updated policy</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact:
            </p>
            <div className="contact-info">
              <p><strong>Carvum Ltd</strong></p>
              <p><strong>Data Protection Officer</strong></p>
              <p>Email: <a href="mailto:vhalanappstore@icloud.com">vhalanappstore@icloud.com</a></p>
              <p>Website: <a href="https://carvum.life" target="_blank" rel="noopener noreferrer">https://carvum.life</a></p>
            </div>
            <p style={{ marginTop: '20px', fontSize: '0.95rem', color: '#666' }}>
              We will respond to your inquiry within 30 days of receipt.
            </p>
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
