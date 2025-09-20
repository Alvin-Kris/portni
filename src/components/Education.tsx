// components/ProfileSection.jsx
const ProfileSection = () => {
  const education = [
    {
      school: "Cebu Institute of Technology University",
      degree: "Master in Information Technology",
      year: "2018 – 2022",
      details: "– 9 units earned",
    },
    {
      school: "Northeastern Cebu College",
      degree: "Bachelor of Science in Information Technology",
      year: "2016 – 2018",
    },
    {
      school: "Maslog National High School",
      degree: "Secondary Education",
      year: "2006 – 2012",
    },
    {
      school: "Bibiana Mercado Elementary School",
      degree: "Elementary Education",
      year: "2006 – 2012",
    },
  ];

  const contact = {
    email: "kriisbeduya@gmail.com",
    phone: "+63 927 735 8462",
    location: "Danao City, Philippines",
    linkedin: "linkedin.com/in/yourprofile",
  };

  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-bold mb-10 text-center hover:text-indigo-400 transition">
        About Me
      </h2>
      <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Education */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition transform hover:-translate-y-1 hover:shadow-2xl group">
          <h2 className="text-3xl font-bold mb-6 transition-colors group-hover:text-indigo-400">
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

        {/* Right: Contact & Work Experience */}
        <div className="flex flex-col gap-8">
          {/* Contact */}
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
          </div>

          {/* Work Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition transform hover:-translate-y-1 hover:shadow-2xl group">
            <h2 className="text-3xl font-bold mb-6 transition-colors group-hover:text-indigo-400">
              Work Experience
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                4 years part-time instructor (Cebu Technological
                University-Danao Campus)
              </li>
              <li>1 year production operator (Cebu Mitsumi Incorporated)</li>
              <li>Dean’s Lister & Academic Distinction recipient</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
