import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-16 my-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center hover:text-indigo-400 transition">
          Recent Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="In-House Entrance Library Login System"
            description="A secure login system designed for internal library management, allowing authorized personnel and students to access library resources efficiently."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            link="#"
          />
          <ProjectCard
            title="In-House E-Library Login System for Free Printing and Computer Usage"
            description="A secure login system for library users to access computers, e-resources, and free printing efficiently."
            image="https://images.unsplash.com/photo-1581090700227-4c4f50b1d1c8?auto=format&fit=crop&w=800&q=80"
            link="#"
          />
          <ProjectCard
            title="Classroom Automation Monitoring and Management with Timetable"
            description="A system that automates classroom monitoring and manages schedules, streamlining class activities and timetable management."
            image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
