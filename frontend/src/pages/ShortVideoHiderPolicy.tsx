// src/pages/ShortVideoHiderPolicy.tsx
import React from 'react';
import '../assets/css/PrivacyPolicy.css';

const ShortVideoHiderPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Short Video Hider Privacy Policy</h1>
          <p>Carvum Limited — Effective December 2, 2025</p>
        </header>

        <main className="privacy-content">
          <section className="privacy-overview">
            <h2>Privacy-First Design</h2>
            <p>
              Short Video Hider is a lightweight iOS app with a bundled Safari Web Extension designed 
              with privacy as the core principle. The app operates entirely on your device with 
              <strong> no tracking, no analytics, and no external network requests</strong>.
            </p>
            <p>
              We built Short Video Hider to give you control over your browsing experience on platforms 
              like YouTube, Instagram, Facebook, and Reddit by removing Shorts and Reels surfaces while 
              keeping ordinary videos and posts intact.
            </p>
          </section>

          <section className="privacy-section">
            <h2>1. What Short Video Hider Does</h2>
            <p>Short Video Hider provides the following features:</p>
            <ul>
              <li>Removes Shorts and Reels surfaces while keeping ordinary videos and posts intact</li>
              <li>Redirects Shorts to the regular video view and ignores Reels entirely</li>
              <li>Hides UI elements related to Shorts or Reels</li>
              <li>Smart, SPA-aware blocking that adapts to page navigation</li>
              <li>Optional feature to hide the YouTube logo for a cleaner, more minimalist look</li>
              <li>Crisp, legible interface with glass-effect backgrounds behind controls</li>
              <li>An animated, always-on background mini-game (Flappy Bird-style) — tap anywhere to play</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. Data Collection</h2>
            <div className="summary-section">
              <h3>We Collect ZERO Data</h3>
              <p>
                <strong>Short Video Hider collects absolutely no personal data, browsing data, or any 
                information about you.</strong>
              </p>
              <ul>
                <li>No user accounts or registration required</li>
                <li>No email addresses, names, or personal information collected</li>
                <li>No browsing history tracked or stored</li>
                <li>No cookies, analytics, or tracking pixels</li>
                <li>No external network requests to our servers or third parties</li>
                <li>No advertising SDKs or data collection frameworks</li>
              </ul>
            </div>
            <p>
              All functionality runs entirely on your device. Your browsing preferences and settings 
              are stored locally on your iPhone or iPad only.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Safari Web Extension</h2>
            <p>The bundled Safari Web Extension operates with complete privacy:</p>
            <ul>
              <li><strong>Works across YouTube, Instagram, Facebook, and Reddit</strong></li>
              <li><strong>Uses navigation APIs, attribute-based selectors, and efficient DOM updates</strong> for reliable blocking</li>
              <li><strong>Per-site toggles</strong> let you choose between redirecting or hiding the UI on each platform</li>
              <li><strong>All logic runs entirely on your device</strong> — no data leaves Safari</li>
              <li><strong>No adverts, analytics, or external network requests</strong></li>
              <li><strong>All data stays local on your device</strong></li>
            </ul>
            <p>
              The extension only modifies the appearance of web pages you visit to hide Shorts and Reels. 
              It does not read, collect, or transmit any of your browsing data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Local Storage Only</h2>
            <p>Short Video Hider stores minimal settings locally on your device:</p>
            <ul>
              <li>Per-site preferences (redirect vs. hide UI)</li>
              <li>YouTube logo visibility preference</li>
              <li>Extension enable/disable state for each platform</li>
            </ul>
            <p>
              These settings are stored using iOS UserDefaults and Safari extension storage APIs. 
              They never leave your device and are deleted when you uninstall the app.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Third-Party Services</h2>
            <p>
              <strong>Short Video Hider does not use any third-party services, SDKs, or frameworks 
              for analytics, advertising, or data collection.</strong>
            </p>
            <p>
              The app operates in complete isolation on your device. We do not integrate with:
            </p>
            <ul>
              <li>Analytics platforms (Google Analytics, Firebase, etc.)</li>
              <li>Advertising networks</li>
              <li>Crash reporting services</li>
              <li>Social media SDKs</li>
              <li>Any external APIs or servers</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>6. Platform Compatibility</h2>
            <p>The Safari Web Extension works on:</p>
            <ul>
              <li><strong>YouTube:</strong> Removes Shorts surfaces and redirects to regular video view</li>
              <li><strong>Instagram:</strong> Hides Reels UI elements</li>
              <li><strong>Facebook:</strong> Removes Reels surfaces</li>
              <li><strong>Reddit:</strong> Hides short-form video content</li>
            </ul>
            <p>
              The extension adapts to each platform's structure and navigation patterns while 
              maintaining complete privacy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. What Short Video Hider Does NOT Do</h2>
            <ul>
              <li>Does not block advertisements</li>
              <li>Does not hide normal videos or posts — only Shorts and Reels surfaces</li>
              <li>Does not affect the YouTube app (only works in Safari)</li>
              <li>Does not collect, store, or transmit any user data</li>
              <li>Does not require an internet connection (except for browsing the web)</li>
              <li>Does not use cookies or tracking technologies</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>8. Getting Started</h2>
            <p>To use Short Video Hider:</p>
            <ul>
              <li>Install the iOS app from the App Store</li>
              <li>Enable the bundled extension in <strong>Settings → Safari → Extensions</strong></li>
              <li>Use the in-app or extension settings to customize behavior per platform</li>
            </ul>
            <p>
              No account creation, no sign-up, no personal information required.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Known Limitations</h2>
            <p>
              Platforms change frequently. If a Shorts or Reels element slips through, it's usually 
              fixed in the next update. We continuously monitor and adapt to platform changes to 
              maintain reliable blocking.
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Your Rights</h2>
            <p>
              Since we collect no data about you, there is no personal information to access, export, 
              or delete. You have complete control over the app:
            </p>
            <ul>
              <li><strong>Enable/disable:</strong> Toggle the extension on or off at any time in Safari settings</li>
              <li><strong>Customize settings:</strong> Choose how the extension behaves on each platform</li>
              <li><strong>Uninstall:</strong> Delete the app and all local settings are removed</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>11. Children's Privacy</h2>
            <p>
              Short Video Hider is suitable for users of all ages. Since we collect no data, 
              there are no privacy concerns related to children's information under COPPA or 
              similar regulations.
            </p>
          </section>

          <section className="privacy-section">
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Since the app operates entirely 
              offline, we will post updates on our website at carvum.life. The "Effective Date" at 
              the top will reflect the latest version.
            </p>
            <p>
              Given that we collect no data, changes to this policy are unlikely. Any updates would 
              be to clarify our privacy-first approach or reflect new features.
            </p>
          </section>

          <section className="privacy-section">
            <h2>13. Contact Information</h2>
            <div className="contact-info">
              <p><strong>Carvum Limited</strong></p>
              <p>Website: <a href="https://carvum.life" target="_blank" rel="noopener noreferrer">https://carvum.life</a></p>
              <p>Email: <a href="mailto:carvum@pm.me">carvum@pm.me</a></p>
              <p>App Store: <a href="https://apps.apple.com/gb/app/short-video-hider/id6745738626" target="_blank" rel="noopener noreferrer">Short Video Hider on App Store</a></p>
            </div>
            <p style={{ marginTop: '20px' }}>
              If you have questions, feedback, or need support, contact us at{' '}
              <a href="mailto:carvum@pm.me">carvum@pm.me</a>.
            </p>
            <p>
              Thank you for giving Short Video Hider a try. If you enjoy it, a tip helps keep updates coming!
            </p>
          </section>

          <section className="privacy-section disclaimer">
            <h2>Summary</h2>
            <p className="disclaimer-text">
              <strong>Short Video Hider is completely private.</strong> We collect no data, 
              use no analytics, and make no external network requests. Everything runs on your 
              device. Your browsing habits are yours alone.
            </p>
          </section>
        </main>

        <footer className="privacy-footer">
          <p>© 2025 Carvum Limited. All rights reserved.</p>
          <p>Last updated: December 2, 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default ShortVideoHiderPolicy;
