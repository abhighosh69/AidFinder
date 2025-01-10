import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">
        Effective Date: <strong>07/01/2025</strong>
      </p>

      <p className="mb-4">
        At AidFinder, we prioritize the privacy of our users and are committed
        to protecting the personal information they share with us. This Privacy
        Policy outlines how we collect, use, and safeguard your information
        while using our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Personal Information:</strong> When you register an account,
          we may collect personal details such as your name, email address,
          phone number, and any health-related information you provide.
        </li>
        <li>
          <strong>Location Data:</strong> To provide accurate hospital and
          ambulance services, we collect location data (e.g., GPS coordinates)
          to find nearby hospitals and blood donors.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect information about how you
          interact with the app, including pages viewed, actions taken, and
          timestamps.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          Provide hospital, ambulance, and donor information based on your
          location.
        </li>
        <li>
          Enhance the user experience by personalizing services and improving
          app functionality.
        </li>
        <li>
          Respond to inquiries, support requests, and other communications from
          users.
        </li>
        <li>
          Send notifications and updates about the app, new features, or changes
          to this privacy policy.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties.
        However, we may share your information with trusted partners and service
        providers for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>To operate and improve the functionality of our platform.</li>
        <li>
          To fulfill your requests, such as hospital appointments or ambulance
          services.
        </li>
        <li>To comply with legal obligations or protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4. Data Security
      </h2>
      <p className="mb-4">
        We implement reasonable measures to protect your personal data from
        unauthorized access, disclosure, alteration, or destruction. However, no
        data transmission over the internet or storage system is 100% secure,
        and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        5. Cookies and Tracking Technologies
      </h2>
      <p className="mb-4">
        We use cookies and similar technologies to enhance user experience,
        analyze usage, and track activities within the app. You can choose to
        disable cookies in your browser settings, but this may limit certain
        features of the app.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        6. Your Rights and Choices
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>Access, update, or delete your personal information.</li>
        <li>Opt-out of receiving marketing communications.</li>
        <li>
          Request to withdraw consent to certain data processing practices.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        7. Data Retention
      </h2>
      <p className="mb-4">
        We retain your information for as long as necessary to provide our
        services and comply with legal obligations. If you wish to delete your
        account, please contact us, and we will promptly remove your personal
        data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        8. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated "Effective Date." Please review this
        policy periodically for any updates.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        9. Contact Us
      </h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how
        we handle your data, please contact us at:
      </p>
      <ul className="list-none mb-6">
        <li>
          <strong>Email:</strong> meow@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +1-222-444-9999
        </li>
        <li>
          <strong>Address:</strong> 1C, Nilmoni Ganguly Ln, Kolkata 700009
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
