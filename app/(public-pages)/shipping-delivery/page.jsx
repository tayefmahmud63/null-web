// app/(public-pages)/terms-and-conditions/page.jsx

export default function TermsPage() {
const sections = [
  {
    title: "Overview",
    content:
      "Null Labz provides shipping and delivery services for hardware products developed as part of our projects. This section outlines how products are handled, shipped, and delivered to clients."
  },
  {
    title: "Processing Time",
    content:
      "Products are prepared for shipment only after successful development, testing, and final approval. Processing time may vary depending on project complexity."
  },
  {
    title: "Shipping Methods",
    content:
      "We use third-party international shipping providers to deliver products. The shipping method is selected based on location, delivery time, and cost efficiency."
  },
  {
    title: "Delivery Time",
    content:
      "Estimated delivery times vary depending on the destination and shipping provider. Delays may occur due to customs processing, logistics issues, or unforeseen circumstances."
  },
  {
    title: "Shipping Costs",
    content:
      "Shipping costs are either included in the project quotation or charged separately, depending on the agreement. Clients are responsible for any additional charges unless stated otherwise."
  },
  {
    title: "Customs & Duties",
    content:
      "For international shipments, customs duties, taxes, and import fees may apply based on the destination country. These charges are the responsibility of the client."
  },
  {
    title: "Tracking",
    content:
      "Once the product is shipped, tracking details will be provided to the client to monitor the delivery status."
  },
  {
    title: "Damage or Loss",
    content:
      "Null Labz is not responsible for damage, loss, or delays caused during transit by third-party shipping providers. Clients are encouraged to report any issues immediately upon delivery."
  },
  {
    title: "Delivery Address",
    content:
      "Clients must provide accurate and complete shipping information. Null Labz is not responsible for delivery failures due to incorrect or incomplete addresses."
  },
  {
    title: "Contact",
    content:
      "For any shipping or delivery-related inquiries, please contact us at contact@nullabz.com."
  }
];
  return (



 <main className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">
              <h1 className="text-4xl font-bold mb-2">Shipping & Delivery</h1>
              <p className="text-white/70 mb-14" >This policy statement is effective as of March 30, 2025</p>
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