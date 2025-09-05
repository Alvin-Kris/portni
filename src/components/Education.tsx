// components/ProfileSection.jsx
const ProfileSection = () => {
  const education = [
    {
      school: "Cebu Technological University",
      degree: "Bachelor of Science in Tourism Management",
      year: "2018 – 2022",
      details:
        "Consistent Dean's Lister, Leadership Awardee, and Academic Distinction recipient.",
    },
    {
      school: "Sample Senior High School",
      degree: "Academic Strand (HUMSS)",
      year: "2016 – 2018",
      details: "Graduated with honors.",
    },
    {
      school: "Sample Elementary School",
      degree: "Elementary Education",
      year: "2006 – 2012",
      details: "Completed primary education with good academic standing.",
    },
  ];

  const contact = {
    email: "youremail@example.com",
    phone: "+63 912 345 6789",
    location: "Cebu City, Philippines",
    linkedin: "linkedin.com/in/yourprofile",
  };

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Education */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition transform hover:-translate-y-1 hover:shadow-2xl group">
          <h2 className="text-3xl font-bold mb-6 transition-colors  group-hover:text-indigo-400">
            Educational Background
          </h2>
          <div className="space-y-6 border-l-4 border-blue-600 pl-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                <span className="text-sm text-gray-500">{edu.year}</span>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact & Other Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition transform hover:-translate-y-1 hover:shadow-2xl group">
          <h2 className="text-3xl font-bold mb-6 transition-colors group-hover:text-indigo-400">
            Contact & Information
          </h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">📧 Email:</span> {contact.email}
            </p>
            <p>
              <span className="font-semibold">📱 Phone:</span> {contact.phone}
            </p>
            <p>
              <span className="font-semibold">📍 Location:</span>{" "}
              {contact.location}
            </p>
            <p>
              <span className="font-semibold">🔗 LinkedIn:</span>{" "}
              {contact.linkedin}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Other Information</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Skilled in Canva, Google Workspace, Microsoft Office</li>
              <li>Experience in customer service & social media management</li>
              <li>Dean’s Lister & Academic Distinction recipient</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
