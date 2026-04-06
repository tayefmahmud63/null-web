// app/(public-pages)/terms-and-conditions/page.jsx

export default function TermsPage() {
    const sections = [
    {
      title: "Overview",
      content:
        "Null Labz provides IoT, embedded systems, and product development services. By engaging with our services, you agree to the terms outlined below, which govern project execution, delivery, and responsibilities."
    },
    {
      title: "Services Scope",
      content:
        "We offer consultation, prototyping, hardware and firmware development, cloud integration, and deployment support. Each project is defined based on agreed requirements and scope before development begins."
    },
    {
      title: "Client Responsibilities",
      content:
        "Clients must provide accurate requirements, timely feedback, and necessary resources. Delays in communication or approvals may impact timelines."
    },
    {
      title: "Payments & Pricing",
      content:
        "All projects follow agreed pricing and milestone terms. Deposits may be required before starting. Payments are non-refundable once development begins."
    },
    {
      title: "Intellectual Property",
      content:
        "Upon full payment, clients receive ownership of deliverables. Null Labz retains rights to reusable frameworks and non-client-specific components."
    },
    {
      title: "Revisions & Scope Changes",
      content:
        "Minor revisions are included within scope. Additional features or changes may require separate pricing and timeline updates."
    },
    {
      title: "Delivery & Timeline",
      content:
        "Timelines are estimates based on complexity. Delays may occur due to dependencies, feedback, or technical challenges."
    },
    {
      title: "Shipping & Delivery",
      content:
        "Hardware products may be shipped via third-party providers. Null Labz is not responsible for shipping delays, customs, or damages."
    },
    {
      title: "Limitation of Liability",
      content:
        "Null Labz is not liable for indirect damages, business loss, or third-party failures, and does not guarantee market success."
    },
    {
      title: "Termination",
      content:
        "Either party may terminate under agreed conditions. Completed work must be compensated accordingly."
    },
    {
      title: "Contact",
      content:
        "For questions, Email is at contact@nullabz.com"
    }
  ];

  return (



 <main className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">
              <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
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