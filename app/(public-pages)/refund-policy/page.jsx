// app/(public-pages)/terms-and-conditions/page.jsx

export default function TermsPage() {
const sections = [
  {
    title: "Overview",
    content:
      "Null Labz operates on a project-based service model involving consultation, development, and prototyping. This Refund Policy outlines the conditions under which refunds may or may not be issued."
  },
  {
    title: "Non-Refundable Deposits",
    content:
      "Initial deposits or advance payments are non-refundable once the project has commenced, as resources are allocated and work begins immediately."
  },
  {
    title: "Milestone Payments",
    content:
      "Payments made for completed milestones are non-refundable. Each milestone represents completed work and delivered progress."
  },
  {
    title: "Project Cancellation",
    content:
      "If a project is canceled by the client, any work completed up to that point must be compensated. No refunds will be issued for completed or ongoing work."
  },
  {
    title: "Eligibility for Refunds",
    content:
      "Refunds may only be considered in cases where work has not yet started or under exceptional circumstances at the sole discretion of Null Labz."
  },
  {
    title: "Hardware & Prototypes",
    content:
      "Physical products, prototypes, and custom-built hardware are non-refundable once manufactured, as they are specifically developed for each client."
  },
  {
    title: "Revisions Instead of Refunds",
    content:
      "In case of dissatisfaction, we prioritize revisions and improvements within the agreed scope rather than refunds."
  },
  {
    title: "Third-Party Costs",
    content:
      "Costs related to third-party services, components, shipping, or tools are non-refundable once incurred."
  },
  {
    title: "Chargebacks",
    content:
      "Unauthorized chargebacks or disputes may result in project suspension and legal action if necessary."
  },
  {
    title: "Contact",
    content:
      "For any questions regarding refunds or cancellations, please contact us at contact@nullabz.com."
  }
];
  return (



 <main className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">
              <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
              <p className="text-white/70 mb-14">This policy statement is effective as of March 30, 2025</p>
        {sections.map((section, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <h1 className="font-semibold">{section.title}</h1>
              <p className="md:col-span-2 text-white-700">
                {section.content}
              </p>
            </div>
            <div className="border-t mt-6" />
          </div>
        ))}
      </div>
    </main>
  );
}