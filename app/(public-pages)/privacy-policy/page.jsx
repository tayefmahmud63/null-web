// app/(public-pages)/terms-and-conditions/page.jsx

export default function TermsPage() {
const sections = [
  {
    title: "Overview",
    content:
      "At Null Labz, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you interact with our website and services."
  },
  {
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and project details when you contact us, subscribe to our newsletter, or engage with our services."
  },
  {
    title: "Visitor Data",
    content:
      "We collect non-personal data such as browser type, device information, and website usage to improve performance and user experience. This data is collected anonymously."
  },
  {
    title: "How We Use Information",
    content:
      "Your information is used to communicate with you, understand your requirements, deliver services, and improve our offerings. We do not sell or rent your personal data."
  },
  {
    title: "Third-Party Services",
    content:
      "We may use third-party tools such as analytics, hosting, or communication platforms. These services may process limited data in accordance with their own privacy policies."
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure."
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies to enhance user experience and analyze traffic. You can choose to disable cookies through your browser settings."
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access, correction, or deletion of your personal data. You may contact us at any time regarding your data."
  },
  {
    title: "Data Retention",
    content:
      "We retain your data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law."
  },
  {
    title: "Updates to Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page."
  },
  {
    title: "Contact",
    content:
      "If you have any questions regarding this policy, please contact us at contact@nullabz.com."
  }
];
  return (



 <main className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">
              <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
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