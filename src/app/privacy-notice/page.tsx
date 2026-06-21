import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notice of Privacy Practices | New Image Dental',
  description:
    'Notice of Privacy Practices describing how health information about you may be used and disclosed, and how you can get access to this information.',
}

export default function PrivacyNoticePage() {
  return (
    <main className="mx-auto bg-[url(/media/dental-graphics.JPG)] px-3 py-12 md:px-24">
      <h1 className="text-nid-blue mb-2 text-center text-2xl font-bold lg:text-3xl">
        Notice of Privacy Practices
      </h1>

      <p className="mb-2 text-center text-sm font-semibold text-gray-700 uppercase">
        This notice describes how health information about you may be used and disclosed and how you
        can get access to this information.
      </p>
      <p className="mb-2 text-center text-sm font-semibold text-gray-700 uppercase">
        Please review it carefully.
      </p>
      <p className="mb-6 text-center text-sm font-semibold text-gray-700 uppercase">
        The privacy of your health information is important to us.
      </p>

      <p className="text-nid-blue mb-8 text-center text-lg font-bold">
        Effective Date: July 14, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-2 text-xl font-semibold">Our Legal Duty</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We are required by applicable federal and state law to maintain the privacy of your health
          information. We are also required to give you this Notice about our privacy practices, our
          legal duties, and your rights concerning your health information. We must follow the
          privacy practices that are described in this Notice while it is in effect.
        </p>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We reserve the right to change our privacy practices and the terms of this Notice at any
          time, provided such changes are permitted by applicable law. Before we make a significant
          change in our privacy practices, we will change this Notice and make the new Notice
          available upon request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-2 text-xl font-semibold">
          Uses and Disclosures of Health Information
        </h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          We use and disclose health information about you for treatment, payment, and healthcare
          operations. For example:
        </p>
        <ul className="mb-4 list-disc space-y-4 pl-6 text-sm text-gray-600 lg:text-base">
          <li>
            <strong>Treatment:</strong> We may use or disclose your health information to a
            physician or other healthcare provider providing treatment to you.
          </li>
          <li>
            <strong>Payment:</strong> We may use and disclose your health information to obtain
            payment for services we provide to you.
          </li>
          <li>
            <strong>Healthcare Operations:</strong> We may use and disclose your health information
            in connection with our healthcare operations, such as quality assessment and improvement
            activities, reviewing the competence of healthcare professionals, and conducting
            training programs.
          </li>
          <li>
            <strong>Required by Law:</strong> We may use or disclose your health information when we
            are required to do so by law, such as for public health activities, reporting abuse or
            neglect, or in response to a court order.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-nid-blue mb-2 text-xl font-semibold">Patient Rights under HIPAA</h2>
        <ul className="mb-4 list-disc space-y-4 pl-6 text-sm text-gray-600 lg:text-base">
          <li>
            <strong>Access:</strong> You have the right to look at or get copies of your health
            information, with limited exceptions.
          </li>
          <li>
            <strong>Disclosure Accounting:</strong> You have the right to receive a list of
            instances in which we or our business associates disclosed your health information for
            purposes other than treatment, payment, healthcare operations, and certain other
            activities.
          </li>
          <li>
            <strong>Restriction:</strong> You have the right to request that we place additional
            restrictions on our use or disclosure of your health information.
          </li>
          <li>
            <strong>Alternative Communication:</strong> You have the right to request that we
            communicate with you about your health information by alternative means or to
            alternative locations.
          </li>
          <li>
            <strong>Amendment:</strong> You have the right to request that we amend your health
            information.
          </li>
        </ul>
      </section>

      <section className="mb-8 border-t border-gray-200 pt-8">
        <h2 className="text-nid-blue mb-2 text-xl font-semibold">Questions and Complaints</h2>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          If you want more information about our privacy practices or have questions or concerns,
          please contact our Privacy Officer.
        </p>
        <p className="mb-4 text-sm text-gray-600 lg:text-base">
          If you are concerned that we may have violated your privacy rights, or you disagree with a
          decision we made about access to your health information, you may complain to us using the
          contact information listed below. You also may submit a written complaint to the U.S.
          Department of Health and Human Services (HHS). We will provide you with the address to
          file your complaint with the HHS upon request.
        </p>
        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="text-nid-blue mb-2 font-bold">Privacy Officer Contact Information:</h3>
          <address className="text-sm text-gray-600 not-italic lg:text-base">
            New Image Dental
            <br />
            Attn: Privacy Officer
            <br />
            3885 S Decatur Blvd #1100
            <br />
            Las Vegas, NV 89103
            <br />
            Phone: 702-838-3311
          </address>
        </div>
      </section>
    </main>
  )
}
