export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-teal mb-6 pb-4 border-b-4 border-teal">
            Cookie Policy
          </h1>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-8 italic">
            <strong>Last Updated:</strong> June 2025
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            This Cookie Policy explains how Pilates with Fadia ("we," "our," or "us") uses cookies and similar tracking technologies on our website pilateswithfadia.com ("Site"). This policy should be read alongside our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. What Are Cookies?</h2>
          <p className="text-gray-700 mb-6">
            Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="text-gray-700 mb-3">We use cookies to:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Remember your preferences and settings</li>
            <li>Keep you logged into your account</li>
            <li>Analyze how our website is used and improve its performance</li>
            <li>Provide personalized content and recommendations</li>
            <li>Enable social media features</li>
            <li>Measure the effectiveness of our marketing campaigns</li>
            <li>Ensure the security of our website</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Types of Cookies We Use</h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Essential Cookies</h3>
            <p className="text-gray-700 mb-2"><strong>Purpose:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
            <p className="text-gray-700 mb-2"><strong>Examples:</strong> Login authentication, shopping cart functionality, security features</p>
            <p className="text-gray-700"><strong>Can be disabled:</strong> No - the website cannot function without these cookies</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Functional Cookies</h3>
            <p className="text-gray-700 mb-2"><strong>Purpose:</strong> These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.</p>
            <p className="text-gray-700 mb-2"><strong>Examples:</strong> Language preferences, region selection, accessibility settings</p>
            <p className="text-gray-700"><strong>Can be disabled:</strong> Yes - but may affect website functionality</p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Analytics Cookies</h3>
            <p className="text-gray-700 mb-2"><strong>Purpose:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
            <p className="text-gray-700 mb-2"><strong>Examples:</strong> Google Analytics, page visit tracking, user behavior analysis</p>
            <p className="text-gray-700"><strong>Can be disabled:</strong> Yes</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Marketing Cookies</h3>
            <p className="text-gray-700 mb-2"><strong>Purpose:</strong> These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
            <p className="text-gray-700 mb-2"><strong>Examples:</strong> Social media pixels, advertising network cookies, retargeting cookies</p>
            <p className="text-gray-700"><strong>Can be disabled:</strong> Yes</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Specific Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Cookie Name</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Purpose</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">session_id</td>
                  <td className="border border-gray-300 p-3">Essential</td>
                  <td className="border border-gray-300 p-3">Maintains user session and login state</td>
                  <td className="border border-gray-300 p-3">Session</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">user_preferences</td>
                  <td className="border border-gray-300 p-3">Functional</td>
                  <td className="border border-gray-300 p-3">Stores user preferences and settings</td>
                  <td className="border border-gray-300 p-3">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">_ga</td>
                  <td className="border border-gray-300 p-3">Analytics</td>
                  <td className="border border-gray-300 p-3">Google Analytics - distinguishes unique users</td>
                  <td className="border border-gray-300 p-3">2 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">_gat</td>
                  <td className="border border-gray-300 p-3">Analytics</td>
                  <td className="border border-gray-300 p-3">Google Analytics - throttles request rate</td>
                  <td className="border border-gray-300 p-3">1 minute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">_gid</td>
                  <td className="border border-gray-300 p-3">Analytics</td>
                  <td className="border border-gray-300 p-3">Google Analytics - distinguishes unique users</td>
                  <td className="border border-gray-300 p-3">24 hours</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">fb_pixel</td>
                  <td className="border border-gray-300 p-3">Marketing</td>
                  <td className="border border-gray-300 p-3">Facebook advertising and retargeting</td>
                  <td className="border border-gray-300 p-3">3 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Third-Party Cookies</h2>
          <p className="text-gray-700 mb-3">We may also use third-party services that set their own cookies on our website, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
            <li><strong>Social Media Platforms:</strong> For social sharing and engagement features</li>
            <li><strong>Payment Processors:</strong> For secure payment processing</li>
            <li><strong>Booking Systems:</strong> For class scheduling and appointment booking</li>
            <li><strong>Live Chat Services:</strong> For customer support features</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Cookie Duration</h2>
          <p className="text-gray-700 mb-3">Cookies may be either:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Managing Your Cookie Preferences</h2>
          
          <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Browser Settings</h3>
            <p className="text-gray-700 mb-3">You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>View what cookies have been set and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from particular sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Browser-Specific Instructions:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
            <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
            <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Opt-Out Tools</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
            <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">NAI Opt-out Tool</a></li>
            <li><strong>Digital Advertising Alliance:</strong> <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">DAA WebChoices Tool</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Mobile Device Settings</h2>
          <p className="text-gray-700 mb-3">For mobile devices, you can manage cookies and tracking through your device settings:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li><strong>iOS:</strong> Settings &gt; Privacy &gt; Tracking / Settings &gt; Safari &gt; Privacy &amp; Security</li>
            <li><strong>Android:</strong> Settings &gt; Privacy &gt; Advanced &gt; Site Settings &gt; Cookies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Impact of Disabling Cookies</h2>
          <p className="text-gray-700 mb-3">Please note that disabling certain cookies may impact your experience on our website:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>You may need to re-enter information more frequently</li>
            <li>Some website features may not work properly</li>
            <li>Personalized content and recommendations may not be available</li>
            <li>You may still see advertisements, but they will be less relevant</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Do Not Track Signals</h2>
          <p className="text-gray-700 mb-6">
            Some browsers include a "Do Not Track" feature that lets you tell websites you do not want to have your online activities tracked. Our website does not currently respond to Do Not Track browser signals or mechanisms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. Updates to This Cookie Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting the updated policy on our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">12. Contact Us</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-teal">
            <p className="text-gray-700 mb-4">If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
            <div className="text-gray-700">
              <p><strong>Pilates with Fadia</strong></p>
              <p>Email: hello@pilateswithfadia.com</p>
              <p>Website: pilateswithfadia.com</p>
            </div>
          </div>

          <p className="text-gray-600 italic mt-8">
            By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy.
          </p>
        </div>
      </div>
    </div>
  );
}