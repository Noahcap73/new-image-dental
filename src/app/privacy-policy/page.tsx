import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | New Image Dental',
  description: 'Privacy Policy for New Image Dental website visitors and users.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto bg-[url(/media/dental-graphics.JPG)] px-3 py-12 md:px-24">
      <h1
        id="privacy-policy"
        className="text-nid-blue mb-8 text-center text-2xl font-bold lg:text-3xl"
      >
        Privacy Policy
      </h1>

      <p className="mb-4 text-sm text-gray-500">Effective Date: July 14, 2025</p>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Introduction</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          New Image Dental (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
          protecting your privacy. This Privacy Policy describes how we collect, use, and disclose
          your personal information when you visit our website (newimagedentalnv.com) and use our
          online services, such as scheduling appointments.
        </p>
        <p className="mb-4 text-sm text-gray-600 italic lg:text-base">
          Note: This policy applies to website usage and general consumer information. For
          information regarding your Protected Health Information (PHI) under HIPAA, please refer to
          our{' '}
          <Link
            href="/privacy-notice"
            className="text-nid-blue hover:text-nid-gold-200 underline transition"
          >
            Notice of Privacy Practices
          </Link>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Information We Collect</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We collect personal information that you provide to us directly, including:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-sm text-gray-600 lg:text-base">
          <li>Names, email addresses, and phone numbers.</li>
          <li>Information submitted through our appointment scheduling or contact forms.</li>
          <li>IP addresses and browser information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">How We Use Your Data</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We use the information we collect for several purposes, including:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-sm text-gray-600 lg:text-base">
          <li>Sending appointment reminders and coordinating care.</li>
          <li>Billing and payment processing.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Who We Share Data With</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We may share your data with trusted third parties to help us operate our business,
          including:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-sm text-gray-600 lg:text-base">
          <li>Billing providers and payment processors.</li>
          <li>Dental software platforms used for practice management.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Cookie and Tracking Disclosure</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          Our website uses cookies, retargeting pixels, and session recording tools to analyze
          traffic, provide social media features, and personalize content and ads. You can manage
          your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Your Rights</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          Depending on your location, you may have the right to:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-sm text-gray-600 lg:text-base">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your personal data.</li>
        </ul>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold uppercase">Terms and Conditions</h2>
        <p className="mb-4 text-sm font-medium text-gray-600 lg:text-base">
          If you consent to receive SMS from New Image Dental, you agree to receive customer care
          text message SMS from us. Reply STOP to unsubscribe; Reply HELP for help; msg & data rates
          may apply. Messaging frequency may vary. See{' '}
          <a
            href="#privacy-policy"
            className="text-nid-blue hover:text-nid-gold-200 underline transition"
          >
            Privacy Policy
          </a>{' '}
          to see our privacy policy and terms and conditions.
        </p>
        <p className="mb-4 text-sm font-bold text-gray-600 lg:text-base">
          No mobile opt-in message consent will be shared with third parties or affiliates for
          marketing purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Update Policy</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at
          the top.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-4 text-xl font-semibold">Contact Us</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          If you have any questions about this Privacy Policy or our terms, please contact us at:
        </p>
        <address className="text-sm text-gray-600 not-italic lg:text-base">
          New Image Dental
          <br />
          3885 S Decatur Blvd #1100
          <br />
          Las Vegas, NV 89103
          <br />
          Email: Newimagedental2025@gmail.com
          <br />
          Phone: 702-838-3311
        </address>
      </section>
    </main>
  )
}
