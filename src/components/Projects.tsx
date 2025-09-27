import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { images } from "../assets/Images";

interface Project {
  title: string;
  description: string;
  details: string;
  images: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    title: "In-House Entrance Library Login System",
    description:
      "A secure login system designed for internal library management, allowing authorized personnel and students to access library resources efficiently.",
    details:
      "This system is designed to provide a simple yet secure way of managing entry and exit using ID numbers. Users enter their ID to log in when they come inside and log out when leaving. This process ensures accurate monitoring of library access at all times. The backend is powered by PHP, which records every login and logout activity in the database. This allows the system to keep track of who is currently inside and who has already left. It also ensures that the stored records can be used for reporting and analysis later on. In addition, the system can display statistics such as which courses have the most frequent visitors. This helps administrators understand usage trends and manage resources more effectively. The interface is built with HTML, Bootstrap, and JavaScript for a responsive and user-friendly experience.",
    images: images.entranceLoginSystem,
    tech: ["HTML5", "Bootstrap", "PHP", "JavaScript"],
  },
  {
    title:
      "In-House E-Library Login System for Free Printing and Computer Usage",
    description:
      "A secure login system for library users to access computers, e-resources, and free printing efficiently.",
    details:
      "This system is developed to manage secure access for library users who need to utilize computers, e-resources, and printing services. Users log in using their ID numbers, ensuring that only authorized individuals can use the facilities. The login and logout process provides accurate tracking of usage in real time. The application is built with Electron, making it a desktop-based system that works smoothly across different platforms. Data management is handled by SQLite, which stores all login and logout activities locally in a lightweight yet reliable database. This integration ensures efficient performance while keeping records easily accessible. Additionally, the system can generate usage statistics to highlight which services are most in demand. Administrators can use this data to make informed decisions about resource allocation and improvements. With its responsive design and desktop-friendly interface, the system delivers both functionality and convenience.",
    images: images.eLibSystem,
    tech: ["Electron", "JavaScript", "SQLite"],
  },
  {
    title: "Classroom Automation Monitoring and Management with Timetable",
    description:
      "A system that automates classroom monitoring and manages schedules, streamlining class activities and timetable management.",
    details:
      "This system is designed to automate classroom monitoring and timetable management for schools and universities. It streamlines class activities by reducing manual work and ensuring schedules are followed accurately. With real-time tracking, it enhances efficiency in managing both classrooms and schedules. The frontend is built with React and React Native, providing a smooth experience across web and mobile platforms. This allows administrators, teachers, and students to easily access the system from any device. The responsive design ensures that users can manage or check timetables conveniently on the go. On the backend, Firebase handles data storage, authentication, and real-time updates. This enables instant synchronization of schedules and monitoring data across all connected devices. By combining these technologies, the system delivers a reliable and modern solution for classroom automation and timetable management.",
    images: images.camm,
    tech: ["React", "React native", "TypeScript", "Firebase"],
  },
];

const Projects = () => {
  const [current, setCurrent] = useState<number>(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setCurrent(0);
    const modal = document.getElementById("project_modal") as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <section id="projects" className="py-16 my-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center hover:text-indigo-400 transition">
          Recent Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.12, // stagger by index
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.images[0]}
                onClick={() => openModal(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box relative max-w-4xl w-full p-0 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-h-screen overflow-y-auto">
          <form method="dialog" className="absolute right-2 top-2 z-50">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white shadow-lg hover:bg-black/80 transition">
              ✕
            </button>
          </form>

          {activeProject && (
            <>
              {/* Carousel */}
              <div className="relative w-full">
                <img
                  src={activeProject.images[current]}
                  alt="Project"
                  className="w-full h-64 sm:h-80 md:h-96 object-contain bg-black"
                />
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/70 text-white flex items-center justify-center hover:bg-gray-700 transition"
                  onClick={() =>
                    setCurrent(
                      (prev) =>
                        (prev - 1 + activeProject.images.length) %
                        activeProject.images.length
                    )
                  }
                >
                  ❮
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/70 text-white flex items-center justify-center hover:bg-gray-700 transition"
                  onClick={() =>
                    setCurrent(
                      (prev) => (prev + 1) % activeProject.images.length
                    )
                  }
                >
                  ❯
                </button>

                {/* Indicators */}
                <div className="flex justify-center mt-4 gap-2">
                  {activeProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-3 w-3 rounded-full ${
                        idx === current ? "bg-indigo-500" : "bg-gray-400"
                      }`}
                      onClick={() => setCurrent(idx)}
                    />
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-gray-900 text-white">
                <h3 className="text-2xl font-bold">{activeProject.title}</h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {activeProject.tech?.map((stack, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-800 rounded-full border border-gray-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="text-gray-400 mt-2 mb-4 space-y-4">
                  {activeProject.details
                    .split(/(?<=[.!?])\s+/)
                    .reduce((acc: string[][], sentence, i) => {
                      if (i % 3 === 0) acc.push([]);
                      acc[acc.length - 1].push(sentence);
                      return acc;
                    }, [])
                    .map((paragraph, idx) => (
                      <p key={idx}>{paragraph.join(" ")}</p>
                    ))}
                </div>
              </div>
            </>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default Projects;
