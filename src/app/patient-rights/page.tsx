import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notice of Privacy Practices | New Image Dental',
  description:
    'Notice of Privacy Practices describing how health information about you may be used and disclosed, and how you can get access to this information.',
}

export default function PatientRightsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-nid-blue mb-2 text-center text-2xl font-bold lg:text-3xl">
        Notice of Privacy Practices
      </h1>

      <p className="mb-6 text-center text-sm font-semibold text-gray-600 uppercase">
        This notice describes how health information about you may be used and disclosed and how you
        can get access to this information. Please review it carefully.
      </p>

      <p className="mb-6 text-gray-600">
        The privacy of your health information is important to us.
      </p>

      <h2 className="text-nid-blue mt-8 mb-2 text-xl font-semibold">Our Legal Duty</h2>
      <p className="mb-4 text-gray-600">
        We are required by applicable federal and state law to maintain the privacy of your health
        information. We are also required to give you this Notice about our privacy practices, our
        legal duties, and your rights concerning your health information. We must follow the privacy
        practices that are described in this Notice while it is in effect. This Notice takes effect
        April 14, 2003, and will remain in effect until we replace it.
      </p>
      <p className="mb-4 text-gray-600">
        We reserve the right to change our privacy practices and the terms of this Notice at any
        time, provided such changes are permitted by applicable law.
      </p>
      <p className="mb-4 text-gray-600">
        We reserve the right to make the changes in our privacy practices and the new terms of our
        Notice effective for all health information that we maintain, including health information
        we created or received before we made the changes. Before we make a significant change in
        our privacy practices, we will change this Notice and make the new Notice available upon
        request.
      </p>
      <p className="mb-4 text-gray-600">
        For more information about our privacy practices, or to request a copy of our Notice, please
        contact us using the information listed on this website.
      </p>

      <h2 className="text-nid-blue mt-8 mb-2 text-xl font-semibold">
        Uses and Disclosures of Health Information
      </h2>
      <p className="mb-4 text-gray-600">
        We use and disclose health information about you for treatment, payment, and healthcare
        operations. For example:
      </p>

      <p className="mb-4 text-gray-600">
        <strong>Treatment:</strong> We may use or disclose your health information to a physician or
        other healthcare provider providing treatment to you.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Payment:</strong> We may use and disclose your health information to obtain payment
        for services we provide to you.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Healthcare Operations:</strong> We may use and disclose your health information in
        connection with our healthcare operations. Healthcare operations include quality assessment
        and improvement activities, reviewing the competence or qualifications of healthcare
        professionals, evaluating practitioner and provider performance, conducting training
        programs, accreditation, certification, licensing or credentialing activities.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Your Authorization:</strong> In addition to our use of your health information for
        treatment, payment or healthcare operations, you may give us written authorization to use
        your health information or to disclose it to anyone for any purpose. If you give us an
        authorization, you may revoke it in writing at any time. Your revocation will not affect any
        use or disclosures permitted by your authorization while it was in effect. Unless you give
        us a written authorization, we cannot use or disclose your health information for any reason
        except those described in this Notice.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>To Your Family and Friends:</strong> We must disclose your health information to you
        as described in the Patient Rights section of this Notice. We may disclose your health
        information to a family member, friend, or other person to the extent necessary to help with
        your healthcare or with payment for your healthcare; but only if you agree that we may do
        so.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Persons Involved In Care:</strong> We may use or disclose health information to
        notify or assist in the notification of (including identifying or locating) a family member,
        your personal representative or another person responsible for your care, of your location,
        your general condition, or death. If you are present, then prior to use or disclosure of
        your health information, we will provide you with an opportunity to object to such uses or
        disclosures. In the event of your incapacity or emergency circumstances, we will disclose
        health information based on a determination using our professional judgment disclosing only
        health information that is directly relevant to the person&apos;s involvement in your
        healthcare. We will also use our professional judgment and our experience with common
        practice to make reasonable inferences of your best interest in allowing a person to pick up
        filled prescriptions, medical supplies, x-rays, or other similar forms of health
        information.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Marketing Health-Related Services:</strong> We will not use your health information
        for marketing communications without your written authorization.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Required by Law:</strong> We may use or disclose your health information when we are
        required to do so by law.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Abuse or Neglect:</strong> We may disclose your health information to appropriate
        authorities if we reasonably believe that you are a possible victim of abuse, neglect,
        domestic violence, or the possible victim of other crimes. We may disclose your health
        information to the extent necessary to avert a serious threat to your health or safety or
        the health or safety of others.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>National Security:</strong> We may disclose to military authorities the health
        information of Armed Forces personnel under certain circumstances. We may disclose to
        authorized federal officials health information required for lawful intelligence,
        counterintelligence, and other national security activities. We may disclose to a
        correctional institution or law enforcement official having lawful custody of protected
        health information of an inmate or patient under certain circumstances.
      </p>
      <p className="mb-4 text-gray-600">
        <strong>Appointment Reminders:</strong> We may use or disclose your health information to
        provide you with appointment reminders (such as voicemail messages, postcards, or letters).
      </p>
    </main>
  )
}
