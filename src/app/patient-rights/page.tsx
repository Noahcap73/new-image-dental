import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Rights | New Image Dental',
  description:
    'Your patient rights regarding access, disclosure, restrictions, and amendments to your health information.',
}

export default function PatientRightsPage() {
  return (
    <main className="mx-auto bg-[url(/media/dental-graphics.JPG)] px-3 py-12 md:px-24">
      <h1 className="text-nid-blue mb-8 text-center text-2xl font-bold lg:text-3xl">
        Patient Rights
      </h1>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        <strong>Access:</strong> You have the right to look at or get copies of your health
        information, with limited exceptions. You may request that we provide copies in a format
        other than photocopies. We will use the format you request unless we cannot practicably do
        so. You must make a request in writing to obtain access to your health information. We may
        charge you a reasonable cost-based fee for expenses such as copies and staff time. If you
        request an alternative format, we will charge a cost-based fee for providing your health
        information in that format.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        <strong>Disclosure Accounting:</strong> You have the right to receive a list of instances in
        which we or our business associates disclosed your health information for purposes, other
        than treatment, payment, healthcare operations, and certain other activities, but not before
        April 14, 2003. If you request this accounting more than once in a 12-month period, we may
        charge you a reasonable, cost-based fee for responding to these additional requests.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        <strong>Restriction:</strong> You have the right to request that we place additional
        restrictions on our use or disclosure of your health information. We are not required to
        agree to these additional restrictions, but if we do, we will abide by our agreement, except
        in an emergency.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        <strong>Alternative Communication:</strong> You have the right to request that we
        communicate with you about your health information by alternative means or to alternative
        locations. You must make your request in writing. Your request must specify the alternative
        means or location, and provide satisfactory explanation how payments will be handled under
        the alternative means or location you request.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        <strong>Amendment:</strong> You have the right to request that we amend your health
        information. Your request must be in writing, and it must explain why the information should
        be amended. We may deny your request under certain circumstances.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        <strong>Electronic Notice:</strong> If you receive this Notice on our website or by
        electronic mail (e-mail), you are entitled to receive this Notice in written form.
      </p>

      <h2 className="text-nid-blue mt-10 mb-4 text-xl font-semibold">Questions and Complaints</h2>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        If you want more information about our privacy practices or have questions or concerns,
        please contact us at the address or phone number provided on this website.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        If you are concerned that we may have violated your privacy rights, you disagree with a
        decision we made about access to your health information, or in response to a request you
        made to amend or restrict the use or disclosure of your health information, or to have us
        communicate with you by alternative means or at alternative locations, you may complain to
        us using the contact information listed on this website. You also may submit a written
        complaint to the U.S. Department of Health and Human Services. We will provide you with the
        address to file your complaint with the U.S. Department of Health and Human Services upon
        request.
      </p>

      <p className="mb-4 text-sm text-gray-600 lg:text-base">
        We support your right to the privacy of your health information. We will not retaliate in
        any way if you choose to file a complaint with us or with the U.S. Department of Health and
        Human Services.
      </p>

      <p className="mt-10 text-xs text-gray-400">
        &copy;2002, 2009 American Dental Association. All Rights Reserved. Reproduction and use of
        this form by dentists and their staff is permitted. Any other use, duplication or
        distribution of this form by any other party, requires the prior written approval of the
        American Dental Association. This Form is educational only, does not constitute legal
        advice, and covers only federal, not state, law (August 14, 2002; April 30, 2009).
      </p>
    </main>
  )
}
